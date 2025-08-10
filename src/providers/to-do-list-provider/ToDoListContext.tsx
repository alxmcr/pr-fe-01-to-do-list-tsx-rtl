import React from "react";
import type {
  ToDoListAction,
  ToDoListState,
} from "../../store/todolist/todolist.actions.types";

export type ToDoListContextData = {
  state: ToDoListState;
  dispatch: React.ActionDispatch<[action: ToDoListAction]>;
};

const initialState: ToDoListContextData = {
  state: {
    todos: [],
  },
  dispatch: () => {},
};

export const ToDoListContext = React.createContext(initialState);
