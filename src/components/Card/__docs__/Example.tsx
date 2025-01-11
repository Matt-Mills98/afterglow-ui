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
  useInsetBorder = true,
  insetBorderSize = '3px',
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
        useInsetBorder={useInsetBorder}
        insetBorderSize={insetBorderSize}
      />
    </div>
  );
};

export default Example;