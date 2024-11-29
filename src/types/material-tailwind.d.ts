import '@material-tailwind/react';

declare module '@material-tailwind/react' {
  interface ButtonProps {
    placeholder?: never;
    onPointerEnterCapture?: never;
    onPointerLeaveCapture?: never;
  }
}
