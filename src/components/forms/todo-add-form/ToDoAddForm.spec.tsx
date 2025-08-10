import { render, screen } from "@testing-library/react";
import { ToDoAddForm } from "./ToDoAddForm";

describe("ToDoAddForm component", () => {
  it("renders component", () => {
    render(<ToDoAddForm />);

    // UI Elements
    const labelDescription = screen.getByText(/Description/i);

    // Expect
    expect(labelDescription).toBeInTheDocument();
  });
});
