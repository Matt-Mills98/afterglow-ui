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
  borderColors?:string | string[];
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const StyledCard = styled.div<CardProps>`
--inset-border-size: -${(props) => props.insetBorderSize || '3px'};
--border-angle: 0deg;
--filter-size:1em;
--rotation-speed: ${(props) => props.rotationSpeed || '3000ms'};
--color-1:rgba(0, 0, 0, 0);
--color-2:rgb(64, 49, 26);
--color-3: rgb(226, 9, 246);
--color-4:rgb(9, 163, 246);
--color-5:rgb(255, 0, 247);

position: relative;
height: ${(props) => props.height || 'auto'};
width: ${(props) => props.width || 'auto'};
padding: ${(props) => props.padding || '1rem'};
border-radius: ${(props) => props.borderRadius || '.5rem'};
color: var(--color-4);
font-size: 15px;
background: ${(props)=> props.backgroundColor || '#000'};
&:hover{
  --filter-size: 2em;
  --rotation-speed: 1000ms;
  --inset-border-size: -5px;
}
${(props) => props.useInsetBorder && ('&::before,')}
&::after {
  content: "";
  z-index:-1;
  position: absolute;
  inset: var(--inset-border-size);
  transition-duration: 300ms;
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

const Card: React.FC<CardProps> = ({
  height,
  width,
  padding,
  borderRadius,
  rotationSpeed,
  backgroundColor,
  useInsetBorder,
  insetBorderSize,
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
      {...props}>
    </StyledCard>
  );
};

export default Card;
