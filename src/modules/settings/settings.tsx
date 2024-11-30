'use client';

// Libs
import Image from 'next/image';
import { cloneElement } from 'react';
import { Select, Option } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faDesktop } from '@fortawesome/free-solid-svg-icons';
// Layouts
import { ContainerLayout } from '@app/layouts/container-layout';
// Components
import { Typography } from '@app/components/ui/typography';
// Assets
import MexicoFlag from '@app/assets/images/mexico.png';
import UnitedStatesFlag from '@app/assets/images/united-states.png';

// eslint-disable-next-line capitalized-comments
// prettier-ignore
const handleSelected = (element: React.ReactElement | undefined) =>
  element ? cloneElement(element, {
    disabled: true,
    className: 'flex items-center opacity-100 px-0 gap-2 pointer-events-none',
  }) : element;
// eslint-disable-next-line capitalized-comments
// prettier-ignore-end

export function SettingsModule() {
  return (
    <ContainerLayout title="Settings">
      <SettingsModule.Modules>
        <SettingsModule.Module title="Language">
          <Select size="lg" label="Select Language" selected={handleSelected}>
            <Option value="es-mx" className="flex items-center gap-2">
              <Image src={MexicoFlag} alt="es" className="size-6 object-cover" width={128} height={128} />
              Español
            </Option>
            <Option value="en-us" className="flex items-center gap-2">
              <Image src={UnitedStatesFlag} alt="en" className="size-6 object-cover" width={128} height={20} />
              English
            </Option>
          </Select>
        </SettingsModule.Module>
        <SettingsModule.Module title="Theme">
          <Select size="lg" label="Select Theme" selected={handleSelected}>
            <Option value="light" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faSun} className="size-5" />
              Light
            </Option>
            <Option value="dark" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMoon} className="size-5" />
              Dark
            </Option>
            <Option value="system" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faDesktop} className="size-5" />
              System
            </Option>
          </Select>
        </SettingsModule.Module>
      </SettingsModule.Modules>
    </ContainerLayout>
  );
}

const Modules = (props: Children) => {
  return <div className="grid w-full grid-cols-1 items-start justify-center gap-5 md:grid-cols-2" {...props} />;
};

interface ModuleProps extends Children {
  title: string;
}

const Module = (props: ModuleProps) => {
  return (
    <div className="flex h-full flex-col items-start justify-center gap-5 rounded-xl border border-gray-300 p-6">
      <Typography.Heading.H5 className="font-semibold">{props.title}</Typography.Heading.H5>
      {props.children}
    </div>
  );
};

SettingsModule.Modules = Modules;
SettingsModule.Module = Module;
