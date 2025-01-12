import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Card",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    height: '50vh',
    width: '50vw',
    padding: '2em',
    borderRadius:'300px',
    rotationSpeed: '4000ms',
    backgroundColor: "#000",
    useInsetBorder: true,
    insetBorderSize: "3px",
    insetBorderColors: ['#FF0000', '#00FF00', '#0000FF'],
    glowSpread: '2em',
    glowDensity:'2em',
    glow: true,
    onClick: () => console.log("Card"),
  },
};
export const Secondary: Story = {
  args: {
    height: '50vh',
    width: '50vw',
    padding: '2em',
    onClick: () => console.log("Card"),
  },
};