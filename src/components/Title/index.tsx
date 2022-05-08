import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg" | number;
  type?: "primary" | "secondary";
};

const Title = styled.h1<Props>`
  ${(props) => props.theme.fonts.primary};
  letter-spacing: 3px;
  font-size: 32px;
  font-weight: bold;
  color: ${(props) =>
    props.type === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};

  ${(props) => props.size === "sm" && "font-size: 24px;"}
  ${(props) => props.size === "lg" && "font-size: 48px;"}
    ${(props) =>
    typeof props.size === "number" && `font-size: ${props.size}px;`}
`;

export default Title;
