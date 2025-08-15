import React from "react";
import { ToDoItem } from "./ToDoItem";
import { mockToDoList } from "../../../mocks/data/mock-to-do-list";
// Import styles for component testing
import "./ToDoItem.styles.css";

describe("ToDoItem.cy.tsx", () => {
  it("renders not done item", () => {
    cy.mount(<ToDoItem todo={mockToDoList[0]} />);

    cy.get("p.todolist__text").should("exist");
    cy.get("p.todolist__text").should("have.text", mockToDoList[0].text);
    cy.get("i.todolist__icon").should("exist");
    cy.get("i.todolist__icon").should("not.have.class", "todolist__icon--done");
  });

  it("renders done item", () => {
    cy.mount(<ToDoItem todo={mockToDoList[1]} />);

    cy.get("p.todolist__text").should("exist");
    cy.get("p.todolist__text").should("have.text", mockToDoList[1].text);
    cy.get("i.todolist__icon").should("exist");
    cy.get("i.todolist__icon").should("have.class", "todolist__icon--done");
  });
});
