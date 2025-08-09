import type { ToDoListAction, ToDoListState } from "../todolist.actions.types";

export function toDoListReducer(
  state: ToDoListState,
  action: ToDoListAction
): ToDoListState {
  switch (action.type) {
    case "todolist/add-to-do-item": {
      return {
        ...state,
        todos: [...state.todos, action.payload.item],
      };
    }

    case "todolist/remove-to-do-item": {
      const todosFiltered = state.todos.filter(
        (todo) => todo.id !== action.payload.item.id
      );

      return {
        ...state,
        todos: todosFiltered,
      };
    }

    case "todolist/toggle-to-do-item": {
      const todosUpdated = state.todos.map((item) => {
        const copyItem = { ...item };

        if (copyItem.id === action.payload.item.id) {
          copyItem.isDone = !item.isDone;
        }
        return copyItem;
      });
      return {
        ...state,
        todos: todosUpdated,
      };
    }

    default: {
      return state;
    }
  }
}
