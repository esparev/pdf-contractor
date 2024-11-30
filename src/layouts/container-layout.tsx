import { Typography } from '@app/components/ui/typography';

interface ContainerLayoutProps extends Children {
  title: string;
}

export function ContainerLayout(props: ContainerLayoutProps) {
  return (
    <div className="container mx-auto flex flex-col items-start justify-center gap-5 px-9 py-12">
      <Typography.Heading.H2 className="font-semibold">{props.title}</Typography.Heading.H2>
      {props.children}
    </div>
  );
}
