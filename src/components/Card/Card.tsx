// components/card/card.tsx
import React, { MouseEventHandler } from "react";
import styled from "styled-components";
//import { keyframes } from "styled-components";

export type CardProps = {
  height?: string;
  width?: string;
  padding?: string;
  borderRadius?: string;
  rotationSpeed?: string;
  backgroundColor?: string;
  useInsetBorder?: boolean;
  insetBorderSize?: string;
  insetBorderColors?:string | string[];
  glowSpread?:string;
  glowDensity?:string;
  glow?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
const createBackground = (colors: string[]|string|undefined) =>{
  const test = `conic-gradient(
    from var(--border-angle), ${colors instanceof Array ? colors.join(', '): colors});`
  console.log(test);
  return  test;
}

const StyledCard = styled.div<CardProps>`
--inset-border-size: -${(props) => props.insetBorderSize || '2px'};
--border-angle: 0deg;
--filter-size:1em;
--rotation-speed: ${(props) => props.rotationSpeed || '3000ms'};

position: relative;
height: ${(props) => props.height || 'auto'};
width: ${(props) => props.width || 'auto'};
padding: ${(props) => props.padding || '1rem'};
border-radius: ${(props) => props.borderRadius || '.5rem'};
background: ${(props)=> props.backgroundColor || '#000'};
&:hover{
  --rotation-speed: 1000ms;
  --inset-border-size: -4px;
};
${(props) => props.useInsetBorder && (`&::before {
  content: "";
  z-index: -1;
  position: absolute;
  inset: var(--inset-border-size);
  transition-duration: 300ms;
  background: ${props.insetBorderColors};
  animation: rotation var(--rotation-speed) linear infinite;
  border-radius: inherit;
  };`)}

${(props) => props.glow && (`&::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: -${props.glowDensity};
  transition-duration: 300ms;
  background: ${props.insetBorderColors};
  animation: rotation var(--rotation-speed) linear infinite;
  border-radius: inherit;
  filter: blur(2em);
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
  useInsetBorder,
  insetBorderSize,
  insetBorderColors,
  glowSpread,
  glowDensity,
  glow,
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
      useInsetBorder={useInsetBorder}
      insetBorderSize={insetBorderSize}
      insetBorderColors={createBackground(insetBorderColors)}
      glowSpread={glowSpread}
      glowDensity={glowDensity}
      glow={glow}
      {...props}>
    </StyledCard>
  );
};

export default Card;
