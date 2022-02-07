import { ButtonBlock } from "./button.styles";

function Button({ medium, large, bgColor, text, onClick, ...otherProps }: any) {
  return (
    <ButtonBlock
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
