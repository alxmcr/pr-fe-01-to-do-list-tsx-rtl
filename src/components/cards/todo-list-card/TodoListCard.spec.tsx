import { screen, render } from "@testing-library/react";
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
});
