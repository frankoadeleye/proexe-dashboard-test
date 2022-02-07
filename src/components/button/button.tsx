import { ButtonBlock } from "./button.styles";

function Button({
  peelAnimation,
  medium,
  large,
  bgColor,
  text,
  onClick,
  ...otherProps
}: any) {
  return (
    <ButtonBlock
      peelAnimation={peelAnimation}
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
