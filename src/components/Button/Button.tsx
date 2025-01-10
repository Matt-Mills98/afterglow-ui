// components/button/button.tsx
import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

export type ButtonProps = {
  text?: string;
  height?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
--border-size: 3px;
--border-angle: 0deg;
--color-1:rgba(0, 0, 0, 0);
--color-2:rgb(64, 49, 26);
--color-3: rgb(246, 203, 9);
--color-4:rgb(246, 100, 9);
--color-5:rgb(255, 25, 0);

position: relative;
background-color: white;
border-radius: 1em;
border-style: none;
height: 100%;
padding: 1em;
border-radius: 3em;
color: var(--color-4);
font-size: 15px;
transition-duration: 200ms;
transtion-timing-function: ease-in-out;
&:hover {
  border-radius: 1em;
  };
&::before {
  content: "";
  z-index:-1;
  position: absolute;
  inset: -3px;
  background: conic-gradient(
  from var(--border-angle),
  var(--color-1),
  var(--color-1),
  var(--color-3),
  var(--color-4),
  var(--color-5)
  );
  animation: rotation 5s linear infinite;
  border-radius: inherit;
  
}

@keyframes rotation {
  0% {--border-angle : 0deg}
  100% {--border-angle : 360deg}
}

@property --border-angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0deg;
}
`;



const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
