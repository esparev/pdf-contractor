interface Children {
  readonly children?: React.ReactNode | undefined;
}
interface ClassNames {
  readonly className?: string | undefined;
}
interface Styles {
  readonly style?: React.CSSProperties | undefined;
}
interface Props extends Children, ClassNames, Styles {}
