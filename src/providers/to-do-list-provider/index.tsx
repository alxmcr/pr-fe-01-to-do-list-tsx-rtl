import React from "react";
import { toDoListReducer } from "../../store/todolist/reducer/todolist.reducer";
import { ToDoListContext, type ToDoListContextData } from "./ToDoListContext";

type Props = {
  children: React.ReactNode;
};

export function ToDoListProvider({ children }: Props) {
  const [state, dispatch] = React.useReducer(toDoListReducer, {
    todos: [],
  });

  const value: ToDoListContextData = {
    state,
    dispatch,
  };

  return (
    <ToDoListContext.Provider value={value}>
      {children}
    </ToDoListContext.Provider>
  );
}
