import React from "react";
import { StyledInput } from "./style";
import InputMask, { Props } from "react-input-mask";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  sizee?: "sm" | "md" | "lg" | number;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

export const InputBirthDate = (props: IInputProps) => (
  <StyledInput {...props} as={InputMask} mask="99/99/9999" />
);

export const InputCPF = (props: IInputProps) => (
  <StyledInput {...props} as={InputMask} mask="999.999.999-99" />
);

export const InputZipCode = (props: IInputProps) => (
  <StyledInput {...props} as={InputMask} mask="99999-999" />
);

export default Input;
