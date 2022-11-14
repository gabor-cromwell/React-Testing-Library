import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "./Todo.js";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addToTodoList = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: "Add" });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};
describe("Todo test", () => {
  it("Checking of task added to the list", async () => {
    render(<MockTodo />);
    addToTodoList(["First", "Second", "Third", "Fourth"]);
    expect(screen.getAllByTestId("Task container")).toHaveLength(4);
    // const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    // const buttonElement = screen.getByRole("button", { name: "Add" });
    // fireEvent.change(inputElement, { target: { value: "First" } });
    // fireEvent.click(buttonElement);
    // fireEvent.change(inputElement, { target: { value: "Second" } });
    // fireEvent.click(buttonElement);
    //     const divElement_1 = screen.getByText(/first/i);
    //     const divElement_2 = screen.getByText(/second/i);
    //     expect(divElement_1).toBeInTheDocument();
    //     expect(divElement_2).toBeInTheDocument();
  });
});
