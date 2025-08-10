import { screen, render } from "@testing-library/react";
import { ToDoListCard } from "./TodoListCard";

describe("ToDoListCard component", () => {
  it("renders component", () => {
    render(<ToDoListCard />);

    // UI Elements
    const labelDescription = screen.getByText(/Description/i);
    const btnAddNew = screen.getByText(/ADD NEW/i);

    // Expect
    expect(labelDescription).toBeInTheDocument();
    expect(btnAddNew).toBeInTheDocument();
  });
});
