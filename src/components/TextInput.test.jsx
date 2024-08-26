import { fireEvent, render } from "@testing-library/react";
import { TextInput } from "./TextInput";

describe("TextInput", () => {
  test("renders input field", () => {
    const { getByRole } = render(<TextInput onSubmit={() => {}} />);

    const input = getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  test("submits value when button is clicked", () => {
    const onSubmit = jest.fn();
    const { getByRole } = render(<TextInput onSubmit={onSubmit} />);

    const input = getByRole("textbox");
    const button = getByRole("button");

    fireEvent.change(input, { target: { value: "Test input" } });
    fireEvent.click(button);

    expect(onSubmit).toHaveBeenCalledWith("Test input");
  });
});
