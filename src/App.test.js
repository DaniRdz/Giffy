import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without errors", () => {
  render(<App />);
  const title = screen.getByText(/Recent Search Gifs/i);
  expect(title).toBeInTheDocument();
});
