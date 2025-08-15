import { mount } from "cypress/react";
import { ToDoList } from "./ToDoList";
import { mockToDoList } from "../../../mocks/data/mock-to-do-list";

describe("ToDoList.cy.tsx component", () => {
  it("renders an empty list", () => {
    mount(<ToDoList todos={[]} />);

    cy.get('[data-cy="msg-empty-list"]').should(
      "have.text",
      "Todo list is empty"
    );

    cy.get('[data-cy="box-todos"]').should("not.exist");
  });

  it("renders a list with items", () => {
    mount(<ToDoList todos={mockToDoList} />);

    cy.get('[data-cy="msg-empty-list"]').should("not.exist");
    cy.get('[data-cy="box-todos"]')
      .find('[data-cy="todo-item"]')
      .should("have.length.greaterThan", 0);
  });
});
