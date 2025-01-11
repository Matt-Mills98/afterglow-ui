// components/button/button.tsx
import React, { MouseEventHandler } from "react";
import styled from "styled-components";
//import { keyframes } from "styled-components";

export type ButtonProps = {
  text?: string;
  height?: string;
  primary?: boolean;
  disabled?: boolean;
  fontSize?: string;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
--border-size: 3px;
--border-angle: 0deg;
--filter-size:1em;
--rotation-speed:3s;
--color-1:rgba(0, 0, 0, 0);
--color-2:rgb(64, 49, 26);
--color-3: rgb(226, 9, 246);
--color-4:rgb(9, 163, 246);
--color-5:rgb(255, 0, 247);

font-family: 'roboto';
position: relative;
border-style: none;
height: 100%;
padding: ;
border-radius: 1em;
color: var(--color-4);
font-size: ${(props) => props.fontSize || '20px'};
background: #000;
&:hover{
  --filter-size: 2em;
  --rotation-speed: 1000ms;
}
&::before,
&::after {
  content: "";
  z-index:-1;
  position: absolute;
  inset: -3px;
  transition-duration:300ms;
  background: conic-gradient(
    from var(--border-angle),
    var(--color-5),
    var(--color-4),
    var(--color-3),
    var(--color-4),
    var(--color-5)
  );
  animation: rotation var(--rotation-speed) linear infinite;
  border-radius: inherit;
}

&::after {
  filter: blur(var(--filter-size));
 };

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
  fontSize,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      fontSize={fontSize}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
