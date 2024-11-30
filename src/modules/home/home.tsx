'use client';

// Libs
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFileCirclePlus, faGear } from '@fortawesome/free-solid-svg-icons';
// Layouts
import { ContainerLayout } from '@app/layouts/container-layout';
// Components
import { Typography } from '@app/components/ui/typography';
// Hooks
import { useGetDictionary } from '@app/hooks/useDictionaries';
// Definitions
import type { Locale } from '@app/i18n';

export function HomeModule() {
  const { lang } = useParams();
  const { data: dictionary, isLoading } = useGetDictionary(lang as Locale);

  return (
    <ContainerLayout title={dictionary?.home.title ?? 'Dashboard'}>
      <HomeModule.Widgets>
        {isLoading ? (
          <>
            <HomeModule.WidgetSkeleton />
            <HomeModule.WidgetSkeleton />
            <HomeModule.WidgetSkeleton />
          </>
        ) : (
          <>
            <HomeModule.Widget
              icon={faFileCirclePlus}
              title={dictionary?.home.modules.create_contract.title ?? 'Crear contrato'}
              href="/contracts/create"
              description={dictionary?.home.modules.create_contract.description ?? 'Crea un contrato en minutos'}
            />
            <HomeModule.Widget
              icon={faGear}
              title={dictionary?.home.modules.settings.title ?? 'Configuración'}
              href="/settings"
              description={dictionary?.home.modules.settings.description ?? 'Configura la plataforma'}
            />
            <HomeModule.WidgetComingSoon title={dictionary?.home.modules.unavailable.title ?? 'Aún No Disponible'} />
          </>
        )}
      </HomeModule.Widgets>
    </ContainerLayout>
  );
}

const Widgets = (props: Children) => {
  return <div className="grid w-full grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 xl:grid-cols-3" {...props} />;
};

interface WidgetProps {
  icon: IconProp;
  title: string;
  href: string;
  description: string;
}

const Widget = (props: WidgetProps) => {
  const { icon, title, href, description } = props;

  return (
    <Link prefetch href={href} className="min-h-24 w-full rounded-xl border border-gray-300 p-6">
      <div className="flex items-center gap-2">
        <div className="flex size-12 items-center justify-center rounded-lg border border-gray-300">
          <FontAwesomeIcon icon={icon} className="size-6" />
        </div>
        <div>
          <Typography.Heading.H6>{title}</Typography.Heading.H6>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  );
};

const WidgetSkeleton = () => {
  return (
    <div className="min-h-24 w-full animate-pulse rounded-xl border border-gray-300 p-6">
      <div className="flex items-center gap-2">
        <div className="flex size-12 items-center justify-center rounded-lg bg-gray-200" />
        <div className="space-y-2">
          <div className="h-5 w-32 rounded-md bg-gray-200" />
          <div className="h-4 w-48 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

type WidgetComingSoonProps = { title: string };

const WidgetComingSoon = (props: WidgetComingSoonProps) => {
  return (
    <div className="flex min-h-24 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-6">
      <Typography.Heading.H5 className="text-center text-gray-500">{props.title}</Typography.Heading.H5>
    </div>
  );
};

HomeModule.Widgets = Widgets;
HomeModule.Widget = Widget;
HomeModule.WidgetSkeleton = WidgetSkeleton;
HomeModule.WidgetComingSoon = WidgetComingSoon;
