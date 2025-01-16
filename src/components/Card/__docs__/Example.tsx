import React, { FC } from "react";
import Card, { CardProps } from "../Card";

const Example: FC<CardProps> = ({
  onClick = () => { },
  height = '50vh',
  width = '50vw',
  padding = "2em",
  borderRadius = "2em",
  rotationSpeed = "4000ms",
  backgroundColor = "#000",
  useBorder = true,
  borderSize = '3px',
  glowColors = ['#FF0000', '#00FF00', '#0000FF'],
  glowSpread='2em',
  glowSize='2em',
  glow=true,
  glowType='Inner',
  gradientType = 'Conic',
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Card
        onClick={onClick}
        height={height}
        width={width}
        padding={padding}
        borderRadius={borderRadius}
        rotationSpeed={rotationSpeed}
        backgroundColor={backgroundColor}
        useBorder={useBorder}
        borderSize={borderSize}
        glowColors={glowColors}
        glowSize={glowSize}
        glowSpread={glowSpread}
        glow={glow}
        glowType={glowType}
        gradientType={gradientType}
      />
    </div>
  );
};

export default Example;