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

test("initial conditions", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkBox = screen.getByRole("checkbox");

  expect(colorButton).not.toBeDisabled();
  expect(checkBox).not.toBeChecked();

  fireEvent.click(checkBox);

  expect(checkBox).toBeChecked();

  expect(colorButton).toBeDisabled();
});
