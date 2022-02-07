import { HeadingTextBlock } from "./heading-text.styles";

interface hProp {
  text: string;
}

function HeadingText({ text }: hProp) {
  return <HeadingTextBlock>{text}</HeadingTextBlock>;
}

export default HeadingText;
