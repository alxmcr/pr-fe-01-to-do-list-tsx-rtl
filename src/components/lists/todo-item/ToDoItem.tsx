import React from "react";
import { ToDoListContext } from "../../../providers/to-do-list-provider/ToDoListContext";
import type { ToDoItemData } from "../../../services/todo-list-service/IToDoListService";
import { toggleToDoItemAction } from "../../../store/todolist/todolist.actions";
import "./ToDoItem.styles.css";

type Props = {
  todo: ToDoItemData;
};

export function ToDoItem(props: Props) {
  const { state, dispatch } = React.useContext(ToDoListContext);

  // Find the current todo from context state, fallback to prop if not found
  const currentTodo =
    state.todos.find((t) => t.id === props.todo.id) || props.todo;

  function handleItemDone() {
    dispatch(toggleToDoItemAction(props.todo));
  }

  return (
    <div
      className="todolist__todo"
      id={currentTodo.id?.toString()}
      data-cy="todo-item"
    >
      <div className="todolist__icons">
        {currentTodo.isDone ? (
          <i
            className="fas fa-check-circle todolist__icon todolist__icon--done"
            onClick={handleItemDone}
          ></i>
        ) : (
          <i
            className="far fa-check-circle todolist__icon"
            onClick={handleItemDone}
          ></i>
        )}
      </div>
      <p className="todolist__text">{currentTodo.text}</p>
    </div>
  );
}
