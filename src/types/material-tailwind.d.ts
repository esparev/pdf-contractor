import '@material-tailwind/react';

declare module '@material-tailwind/react' {
  interface ButtonProps {
    placeholder?: never;
    onPointerEnterCapture?: never;
    onPointerLeaveCapture?: never;
  }
  interface IconButtonProps {
    placeholder?: never;
    onPointerEnterCapture?: never;
    onPointerLeaveCapture?: never;
  }
  interface SelectProps {
    placeholder?: never;
    onPointerEnterCapture?: never;
    onPointerLeaveCapture?: never;
  }
  interface OptionProps {
    placeholder?: never;
    onPointerEnterCapture?: never;
    onPointerLeaveCapture?: never;
  }
  interface RadioProps {
    placeholder?: never;
    crossOrigin?: never;
    onPointerEnterCapture?: never;
    onPointerLeaveCapture?: never;
  }
}
