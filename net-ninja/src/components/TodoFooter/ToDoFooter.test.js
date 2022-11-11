import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Check the title exist", async () => {
  render(<Header title="Header" />);
  const headerElement = screen.getByText(/header/i);
  expect(headerElement).toBeInTheDocument();
});
