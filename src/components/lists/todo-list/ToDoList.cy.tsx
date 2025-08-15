import { mount } from "cypress/react";
import { ToDoList } from "./ToDoList";

describe("ToDoList.cy.tsx component", () => {
  it("renders an empty list", () => {
    mount(<ToDoList todos={[]} />);

    cy.get('[data-cy="msg-empty-list"]').should(
      "have.text",
      "Todo list is empty"
    );
  });
});
