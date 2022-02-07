import { Div } from "components/div";
import { NewUserFormHeaderBlock } from "./new-user-form.styles";

function NewUserFormHeader({ text = "Form" }: any) {
  return (
    <NewUserFormHeaderBlock>
      <Div className="text">{text}</Div>
    </NewUserFormHeaderBlock>
  );
}

export default NewUserFormHeader;
