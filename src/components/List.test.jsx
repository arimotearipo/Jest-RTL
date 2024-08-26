import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { List } from "./List";

describe("List Component", () => {
  test("renders all list items", () => {
    render(<List />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(5); // We expect 5 items
  });

  test("first item is selected by default", () => {
    render(<List />);
    const firstItem = screen.getByText("1"); // First item text should be '1'
    expect(firstItem).toHaveClass("selected");
  });

  test("clicking on an item updates the selected item", () => {
    render(<List />);
    const firstItem = screen.getByText("1");
    const thirdItem = screen.getByText("3");

    // Initially, the first item should be selected
    expect(firstItem).toHaveClass("selected");
    expect(thirdItem).toHaveClass("unselected");

    // Click on the third item
    fireEvent.click(thirdItem);

    // Now the third item should be selected
    expect(firstItem).toHaveClass("unselected");
    expect(thirdItem).toHaveClass("selected");
  });
});
