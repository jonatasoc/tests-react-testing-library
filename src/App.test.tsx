import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  expect(screen.getByText(/change to blue/i)).toBeVisible();

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  expect(screen.getByText(/change to red/i)).toBeVisible();
});
