import { ButtonBlock } from "./button.styles";

function Button({
  pealAnimation,
  medium,
  large,
  bgColor,
  text,
  onClick,
  ...otherProps
}: any) {
  return (
    <ButtonBlock
      pealAnimation={pealAnimation}
      medium={medium}
      large={large}
      bgColor={bgColor}
      onClick={onClick}
      {...otherProps}>
      {text}
    </ButtonBlock>
  );
}

export default Button;
