import React from "react";
import { StyledInput } from "./style";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  sizee?: "sm" | "md" | "lg" | number;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

export default Input;
