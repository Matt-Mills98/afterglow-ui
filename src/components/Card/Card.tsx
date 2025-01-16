// components/card/card.tsx
import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { createBackground } from "../../utils/utils";
//import { keyframes } from "styled-components";

export type CardProps = {
  height?: string;
  width?: string;
  padding?: string;
  borderRadius?: string;
  rotationSpeed?: string;
  backgroundColor?: string;
  useBorder?: boolean;
  borderSize?: string;
  glowColors?: string | string[];
  glowSize?: string;
  glowSpread?: string;
  glow?: boolean;
  glowType?: "Inner" | "Outer";
  gradientType?: "Linear" | "Conic"
  onClick?: MouseEventHandler<HTMLDivElement>;
};



const StyledCard = styled.div<CardProps>`
--inset-border-size: -${(props) => props.borderSize || '2px'};
--border-angle: 0deg;
--filter-size:1em;
--rotation-speed: ${(props) => props.rotationSpeed || '3000ms'};

position: relative;
height: ${(props) => props.height || 'auto'};
width: ${(props) => props.width || 'auto'};
padding: ${(props) => props.padding || '1rem'};
border-radius: ${(props) => props.borderRadius || '.5rem'};
background: ${(props) => props.backgroundColor || '#000'};

&:hover{
  --inset-border-size: -4px;
};
${(props) => props.glowType === "Inner" &&
    `overflow: hidden;
  &::before {
	  content: "";
    position: absolute;
    inset: 0px;
    ${props.useBorder && `border-width: ${props.borderSize || '5px'};
    border-image: ${props.backgroundColor || '#000'};
    border-style: solid;`}
    border-radius: inherit;
    padding: 40px; 
    background: ${props.glowColors || createBackground(['#FFFFFF', '#FFFFAA', 'transparent', 'transparent'], props.gradientType)};
    animation: rotation var(--rotation-speed) linear infinite;
  }
  &::after {
    content: "";
    background: ${props.backgroundColor || '#000'};;
    inset: ${props.glowSpread || '1em'};
    position:absolute;
    border-radius: inherit;
    filter: blur(${props.glowSize || '2em'});
  }
 `
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

const Card: React.FC<CardProps> = ({
  height,
  width,
  padding,
  borderRadius,
  rotationSpeed,
  backgroundColor,
  useBorder,
  borderSize,
  glowColors,
  glowSpread,
  glowSize,
  glow,
  glowType,
  gradientType,
  onClick,
  ...props
}) => {
  return (
    <StyledCard
      onClick={onClick}
      height={height}
      width={width}
      padding={padding}
      borderRadius={borderRadius}
      rotationSpeed={rotationSpeed}
      backgroundColor={backgroundColor}
      useBorder={useBorder}
      borderSize={borderSize}
      glowColors={glowColors && createBackground(glowColors, gradientType)}
      glowSpread={glowSpread}
      glowSize={glowSize}
      glow={glow}
      glowType={glowType}
      gradientType={gradientType}
      {...props}>
    </StyledCard>
  );
};

export default Card;
