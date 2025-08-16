import { mount } from "cypress/react";
import { ToDoAddForm } from "./ToDoAddForm";

describe("ToDoAddForm.cy.tsx", () => {
  it("renders component", () => {
    mount(<ToDoAddForm />);

    cy.get('[data-cy="item-label-description"]').should("be.visible");
    cy.get('[data-cy="item-label-description"]').should(
      "have.text",
      "Description:"
    );
    cy.get('[data-cy="item-input-description"]').should("be.visible");
    cy.get('[data-cy="item-input-description"]').should(
      "have.attr",
      "placeholder",
      "Enter the task's description"
    );
    cy.get('[data-cy="input-btn-add-item"]').should("be.visible");
    cy.get('[data-cy="input-btn-add-item"]').should("have.text", "ADD NEW");
  });
});
