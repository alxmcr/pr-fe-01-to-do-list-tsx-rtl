import type { ToDoItemData } from "../../services/todo-list-service/IToDoListService";
import type { ToDoListAction } from "./todolist.actions.types";

export function addToDoItemAction(item: ToDoItemData): ToDoListAction {
  return {
    type: "todolist/add-to-do-item",
    payload: {
      item,
    },
  };
}

export function removeToDoItemAction(item: ToDoItemData): ToDoListAction {
  return {
    type: "todolist/remove-to-do-item",
    payload: {
      item,
    },
  };
}

export function toggleToDoItemAction(item: ToDoItemData): ToDoListAction {
  return {
    type: "todolist/toggle-to-do-item",
    payload: {
      item,
    },
  };
}
