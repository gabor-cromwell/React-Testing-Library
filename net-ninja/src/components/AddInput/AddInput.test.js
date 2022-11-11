import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "./AddInput";

const mockSetToDo = jest.fn();

describe("Input field tests", () => {
  it("Do we have an input field?", async () => {
    render(<AddInput todos={[]} setTodos={mockSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("Is the typing happening?", async () => {
    render(<AddInput todos={[]} setTodos={mockSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Go Shopping" } });
    expect(inputElement.value).toBe("Go Shopping");
  });

  it("Clear the input field after adding the item to the list", async () => {
    render(<AddInput todos={[]} setTodos={mockSetToDo} />);
    const button = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(button);
    expect(button.value).toBe("");
  });
});
