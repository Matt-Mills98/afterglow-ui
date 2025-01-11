//Card/__test__/Card.test.tsx
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "../Card";

describe("Card component", () => {
  it("Card should render correctly", () => {
    render(<Card />);
    const card = screen.getByRole("card");
    expect(card).toBeDefined();
  });
});