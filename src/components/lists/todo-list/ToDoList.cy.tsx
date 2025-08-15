import { mount } from "cypress/react";
import { ToDoList } from "./ToDoList";

describe("ToDoList.cy.tsx component", () => {
  it("renders an empty list", () => {
    mount(<ToDoList todos={[]} />);
  });
});
