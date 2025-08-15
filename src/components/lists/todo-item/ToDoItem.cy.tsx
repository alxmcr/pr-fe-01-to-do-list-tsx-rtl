import { mount } from "cypress/react";
import { mockToDoList } from "../../../mocks/data/mock-to-do-list";
import { ToDoListContext } from "../../../providers/to-do-list-provider/ToDoListContext";
import { ToDoItem } from "./ToDoItem";
// Import styles for component testing
import "./ToDoItem.styles.css";

describe("ToDoItem.cy.tsx", () => {
  it("renders not done item", () => {
    mount(<ToDoItem todo={mockToDoList[0]} />);

    cy.get("p.todolist__text").should("exist");
    cy.get("p.todolist__text").should("have.text", mockToDoList[0].text);
    cy.get("i.todolist__icon").should("exist");
    cy.get("i.todolist__icon").should("not.have.class", "todolist__icon--done");
  });

  it("renders done item", () => {
    mount(<ToDoItem todo={mockToDoList[1]} />);

    cy.get("p.todolist__text").should("exist");
    cy.get("p.todolist__text").should("have.text", mockToDoList[1].text);
    cy.get("i.todolist__icon").should("exist");
    cy.get("i.todolist__icon").should("have.class", "todolist__icon--done");
  });

  it("marks as done", () => {
    // Create a mock dispatch function that we can spy on
    const mockDispatch = cy.stub().as("dispatch");

    const customContextValue = {
      state: { todos: mockToDoList },
      dispatch: mockDispatch,
    };

    mount(
      <ToDoListContext.Provider value={customContextValue}>
        <ToDoItem todo={mockToDoList[0]} />
      </ToDoListContext.Provider>
    );

    // Verify the component renders correctly initially
    cy.get("i.todolist__icon").should("not.have.class", "todolist__icon--done");

    // Click the icon
    cy.get(".far").click();

    // Verify that dispatch was called
    cy.get("@dispatch").should("have.been.called");

    // Since the component now reads from context state, we need to update the context
    // to simulate what would happen in a real app
    const updatedContextValue = {
      state: {
        todos: mockToDoList.map((item) =>
          item.id === mockToDoList[0].id
            ? { ...item, isDone: !item.isDone }
            : item
        ),
      },
      dispatch: mockDispatch,
    };

    // Re-mount with updated context
    mount(
      <ToDoListContext.Provider value={updatedContextValue}>
        <ToDoItem todo={mockToDoList[0]} />
      </ToDoListContext.Provider>
    );

    // Now verify the icon has the done class
    cy.get("i.todolist__icon").should("have.class", "todolist__icon--done");
  });
});
