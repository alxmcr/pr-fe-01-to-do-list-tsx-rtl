import { mount } from "cypress/react";
import { ToDoListCard } from "./TodoListCard";
import {
  getNameDay,
  internationalizationDate,
} from "../../../helpers/date-helpers";

describe("TodoListCard component", () => {
  it("day and name day", () => {
    const today = new Date();
    const nameDay = getNameDay(today);

    // i10n
    const options: Intl.DateTimeFormatOptions = {
      dateStyle: "medium",
    };
    const dateFormatted = internationalizationDate(today, options);

    mount(<ToDoListCard />);

    cy.get('[data-cy="card-day"]').should("be.visible");
    cy.get('[data-cy="card-day"]').should("have.text", dateFormatted);
    cy.get('[data-cy="card-name-day"]').should("be.visible");
    cy.get('[data-cy="card-name-day"]').should("have.text", nameDay);
  });
});
