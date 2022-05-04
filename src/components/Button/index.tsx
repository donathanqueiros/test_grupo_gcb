import * as React from "react";
import { StyledButton } from "./styles";

interface IHeaderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, IHeaderProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} {...props}>
        <span>{children}</span>
      </StyledButton>
    );
  }
);

export default Button;
