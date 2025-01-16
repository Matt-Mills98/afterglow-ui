import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "HELLO",
    primary: true,
    fontSize: "10px",
    disabled: false,
    size: "large",
    useBorder: true,
    glow: true,
    glowColors: ["blue", "red"],
    glowSize: "1em",
    glowSpread: "1em",
    glowType: "Outer",
    gradientType: "Linear",
    borderSize: "2px",
    onClick: () => console.log("Button"),
    padding: "10px",
  },
};
export const Secondary: Story = {
  args: {
    text: "Button",
    primary: false,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};
