import { fireEvent, render, screen } from "@testing-library/react";
import { Toggle } from "./Toggle";

describe("Toggle", () => {
  test("button to exists", () => {
    render(<Toggle />);

    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
  });

  test("renders text when toggled", () => {
    render(<Toggle />);

    const btn = screen.getByRole("button");

    fireEvent.click(btn, "click");

    const textElem = screen.queryByText("The toggle is on!");

    expect(textElem).toBeInTheDocument();
  });
});
