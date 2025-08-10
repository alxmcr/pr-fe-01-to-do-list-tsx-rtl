import type { ToDoItemData } from "../../services/todo-list-service/IToDoListService";

type AddToDoItemAction = {
  type: "todolist/add-to-do-item";
  payload: {
    item: ToDoItemData;
  };
};

type RemoveToDoItemAction = {
  type: "todolist/remove-to-do-item";
  payload: {
    item: ToDoItemData;
  };
};

type ToggleToDoItemAction = {
  type: "todolist/toggle-to-do-item";
  payload: {
    item: ToDoItemData;
  };
};

export type ToDoListAction =
  | AddToDoItemAction
  | RemoveToDoItemAction
  | ToggleToDoItemAction;

export type ToDoListState = {
  todos: ToDoItemData[];
};
