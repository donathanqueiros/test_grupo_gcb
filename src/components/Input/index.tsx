import React from "react";
import { StyledInput } from "./style";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return <StyledInput ref={ref} />;
});

export default Input;
