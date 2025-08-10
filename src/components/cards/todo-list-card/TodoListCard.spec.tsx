import { screen, render, fireEvent } from "@testing-library/react";
import { ToDoListCard } from "./TodoListCard";
import {
  getNameDay,
  internationalizationDate,
} from "../../../helpers/date-helpers";

describe("ToDoListCard component", () => {
  it("renders component", () => {
    render(<ToDoListCard />);

    // Dates
    const today = new Date();
    const nameDay = getNameDay(today);

    // i10n
    const options: Intl.DateTimeFormatOptions = {
      dateStyle: "medium",
    };
    const dateFormatted = internationalizationDate(today, options);

    // UI Elements
    const labelDescription = screen.getByText(/Description/i);
    const btnAddNew = screen.getByText(/ADD NEW/i);
    const textDateFormatted = screen.getByText(dateFormatted);
    const textNameDay = screen.getByText(nameDay);

    // Expect
    expect(labelDescription).toBeInTheDocument();
    expect(btnAddNew).toBeInTheDocument();
    expect(textDateFormatted).toBeInTheDocument();
    expect(textNameDay).toBeInTheDocument();
  });

  it("empty list", () => {
    render(<ToDoListCard />);

    // UI Elements
    const textEmptyList = screen.getByText(/Todo list is empty/i);

    // Expect
    expect(textEmptyList).toBeInTheDocument();
  });

  it("add an item", () => {
    render(<ToDoListCard />);

    // UI elements
    const btnAddNew = screen.getByText(/ADD NEW/i);
    const inputText = screen.getByLabelText("Description:");
    const textEmptyList = screen.getByText(/Todo list is empty/i);

    expect(btnAddNew).toBeInTheDocument();
    expect(inputText).toBeInTheDocument();
    expect(textEmptyList).toBeInTheDocument();

    // Fill input
    const textTodoInputTest = "Test Todo";
    fireEvent.change(inputText, { target: { value: textTodoInputTest } });

    // Add item
    fireEvent.click(btnAddNew);

    // Check list
    const itemText = screen.getByText(textTodoInputTest);
    expect(textEmptyList).not.toBeInTheDocument();
    expect(itemText).toBeInTheDocument();
  });
});
