import { fireEvent, render, screen } from "@testing-library/react";
import {
  getNameDay,
  internationalizationDate,
} from "../../../helpers/date-helpers";
import { AppProviders } from "../../../providers/AppProviders";
import { ToDoListCard } from "./TodoListCard";

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

  it("submits a new todo item and clears the input", () => {
    render(
      <AppProviders>
        <ToDoListCard />
      </AppProviders>
    );

    const input = screen.getByLabelText(/description/i);
    const button = screen.getByRole("button", { name: /add new/i });

    // Enter text
    const textInput = "Test task";
    fireEvent.change(input, { target: { value: textInput } });
    expect(input).toHaveValue(textInput);

    // Submit
    fireEvent.click(button);

    // Input should be cleared
    expect(input).toHaveValue("");

    // Check new item added
    const item = screen.getByText(textInput);
    expect(item).toBeInTheDocument();

    // ✅ Use queryByText here instead of getByText
    const textEmptyList = screen.queryByText(/Todo list is empty/i);
    expect(textEmptyList).not.toBeInTheDocument();
  });
});
