import { Div } from "components/div";
import { FormInputBlock } from "./form-input.styles";

function FormInput({ errorBorder, label, children, ...props }: any) {
  return (
    <FormInputBlock errorBorder={errorBorder}>
      <Div className="label">{label}</Div>
      <input {...props} required />
      {children}
    </FormInputBlock>
  );
}

export default FormInput;
