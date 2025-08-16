import { render, screen } from "@testing-library/react";
import { ToDoAddForm } from "./ToDoAddForm";

describe("ToDoAddForm component", () => {
  it("renders component", () => {
    render(<ToDoAddForm />);

    // UI Elements
    const labelDescription = screen.getByText(/Descripxtion/i);
    const btnAddNew = screen.getByText(/ADD NEW/i);

    // Expect
    expect(labelDescription).toBeInTheDocument();
    expect(btnAddNew).toBeInTheDocument();
  });
});
