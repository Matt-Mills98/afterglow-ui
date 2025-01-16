// components/button/button.tsx
import React, { MouseEventHandler } from "react";
import styled from "styled-components";
//import { keyframes } from "styled-components";
import { createBackground } from "../../utils/utils";
export type ButtonProps = {
  text?: string;
  height?: string;
  primary?: boolean;
  disabled?: boolean;
  fontSize?: string;
  useBorder?: boolean;
  padding?:string;
  borderSize?:string;
  glowType?: "Inner" | "Outer";
  glowColors?: string | string[];
  glow?: boolean;
  glowSpread?: string;
  glowSize?: string;
  gradientType?: "Linear" | "Conic"
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};


const StyledButton = styled.button<ButtonProps>`
--border-size: 3px;
--inset-border-size: -${(props) =>  '2px'};

--border-angle: 0deg;
--filter-size:1em;
--rotation-speed:3s;
--color-1:rgba(0, 0, 0, 0);
--color-2:rgb(64, 49, 26);
--color-3: rgb(226, 9, 246);
--color-4:rgb(9, 163, 246);
--color-5:rgb(255, 0, 247);

font-family: 'Roboto';
position: relative;
border-style: none;
height: 100%;
padding: 3em;
border-radius: 1em;
color: var(--color-4);
font-size: ${(props) => props.fontSize || '20px'};
background: #000;
&:hover{
  --filter-size: 2em;
  --rotation-speed: 1000ms;
}
  
${(props) => props.useBorder && props.glowType !== "Inner" && (`
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    inset: var(--inset-border-size);
    transition-duration: 300ms;
    background: ${props.glowColors || createBackground(['#FFFFFF', '#FFFFAA', 'transparent', 'transparent'], props.gradientType)};
    animation: rotation var(--rotation-speed) linear infinite;
    border-radius: inherit;
  };`)}

${(props) => props.glow && props.glowType !== "Inner" && (`
  &::after {
    content: "";
    z-index:  -1;
    position: absolute;
    inset: -${props.glowSpread || '1em'};
    transition-duration: 300ms;
    background: ${props.glowColors || createBackground(['#FFFFFF', '#FFFFAA', 'transparent', 'transparent'], props.gradientType)};
    animation: rotation var(--rotation-speed) linear infinite;
    border-radius: inherit;
    filter: blur(${props.glowSize || '2em'});
};`)}
${(props) => props.useBorder && props.glowType !== "Inner" && (`
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    inset: var(--inset-border-size);
    transition-duration: 300ms;
    background: ${props.glowColors || createBackground(['#FFFFFF', '#FFFFAA', 'transparent', 'transparent'], props.gradientType)};
    animation: rotation var(--rotation-speed) linear infinite;
    border-radius: inherit;
  };`)}

${(props) => props.glow && props.glowType !== "Inner" && (`
  &::after {
    content: "";
    z-index:  -1;
    position: absolute;
    inset: -${props.glowSpread || '1em'};
    transition-duration: 300ms;
    background: ${props.glowColors || createBackground(['#FFFFFF', '#FFFFAA', 'transparent', 'transparent'], props.gradientType)};
    animation: rotation var(--rotation-speed) linear infinite;
    border-radius: inherit;
    filter: blur(${props.glowSize || '2em'});
};`)}
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
  useBorder,
  glow,
  glowSize,
  glowSpread,
  glowColors,
  glowType,
  borderSize,
  padding,
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
      padding={padding}
      borderSize={borderSize}
      useBorder={useBorder}
      glow={glow}
      glowSize={glowSize}
      glowSpread={glowSpread}
      glowColors={glowColors}
      glowType={glowType}
      {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
