import { cn } from '@app/utils/cn';

export const Typography = () => {};
export const Heading = () => {};
export const Paragraph = () => {};

export const H1 = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return (
    <h1 {...props} className={cn('text-4xl font-medium transition-all duration-1000 md:text-5xl', props.className)}>
      {props.children}
    </h1>
  );
};

export const H2 = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return (
    <h2 {...props} className={cn('text-3xl font-medium transition-all duration-1000 md:text-4xl', props.className)}>
      {props.children}
    </h2>
  );
};

export const H3 = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return (
    <h3 {...props} className={cn('text-2xl font-medium transition-all duration-1000 md:text-3xl', props.className)}>
      {props.children}
    </h3>
  );
};

export const H4 = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return (
    <h4 {...props} className={cn('text-xl font-medium transition-all duration-1000 md:text-2xl', props.className)}>
      {props.children}
    </h4>
  );
};

export const H5 = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return (
    <h5 {...props} className={cn('text-lg font-medium transition-all duration-1000 md:text-xl', props.className)}>
      {props.children}
    </h5>
  );
};

export const H6 = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return (
    <h6 {...props} className={cn('text-base font-medium transition-all duration-1000 md:text-lg', props.className)}>
      {props.children}
    </h6>
  );
};

export const P = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => {
  return <p {...props} className={cn('text-base transition-all duration-1000', props.className)} />;
};

Typography.Heading = Heading;
Typography.Paragraph = Paragraph;

Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;
Heading.H5 = H5;
Heading.H6 = H6;

Paragraph.P = P;
