'use client';

// Libs
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { IconButton } from '@material-tailwind/react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Components
import { Typography } from '@app/components/ui/typography';

interface ContainerLayoutProps extends Children {
  title: string;
  hasBackButton?: boolean;
}

export function ContainerLayout(props: ContainerLayoutProps) {
  const { title, hasBackButton = false, children } = props;

  const router = useRouter();
  const handleBackButton = useCallback(() => router.back(), [router]);

  return (
    <div className="container mx-auto flex flex-col items-start justify-center gap-5 px-9 py-12">
      <div className="flex items-center justify-between gap-2">
        {hasBackButton && (
          <IconButton variant="outlined" size="md" color="black" onClick={handleBackButton}>
            <FontAwesomeIcon icon={faArrowLeft} className="size-4" />
          </IconButton>
        )}
        <Typography.Heading.H2 className="font-semibold">{title}</Typography.Heading.H2>
      </div>
      {children}
    </div>
  );
}
