/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { Search } from "./App";

describe("Button tests", () => {
  test("First button exist", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /press/i });
    expect(button).toBeInTheDocument();
  });

  test("Second button exist", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /second/i });
    expect(button).toBeInTheDocument();
  });

  test("Button clicked once", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /press/i });
    userEvent.click(button);
    const number = screen.getByRole("heading", { level: 2 });
    expect(number).toHaveTextContent("2");
  });

  test("Button clicked twice", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /press/i });
    userEvent.click(button);
    const firstNumber = screen.getByRole("heading", { level: 2 });
    expect(firstNumber).toHaveTextContent("2");
    userEvent.click(button);
    const secondNumber = screen.getByRole("heading", { level: 2 });
    expect(secondNumber).toHaveTextContent("1");
  });
});

describe("API tests", () => {
  test("Look for a NULL element", () => {
    render(<App />);
    const nullText = screen.queryByText("This doesn't exist");
    expect(nullText).toBeNull();
  });
  // test("API call test", async () => {
  //   render(<App />);
  //    const name = screen.findByRole("paragraph");
  //    expect(name).toBeInTheDocument();
  //   // screen.findByRole("paragraph").then((result) => {
  //   //   console.log("test", result);
  //   // });
  // });
});

describe("HTML elements", () => {
  test("Testing the input field", async () => {
    const onChange = jest.fn();

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );
    const textBox = screen.getByRole("textbox");
    await userEvent.type(textBox, "Hello");
    expect(onChange).toHaveBeenCalledTimes(5);
  });
});
