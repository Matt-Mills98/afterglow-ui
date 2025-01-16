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
    useBorder: true,
    borderSize: "3px",
    glowColors: ['#FF0000', '#00FF00', '#0000FF'],
    glowSpread: '2em',
    glowSize:'2em',
    glow: true,
    glowType:'Inner',
    gradientType:'Conic',
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