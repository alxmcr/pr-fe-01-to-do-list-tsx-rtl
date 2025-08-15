import React from "react";
import { ToDoListContext } from "../../../providers/to-do-list-provider/ToDoListContext";
import type { ToDoItemData } from "../../../services/todo-list-service/IToDoListService";
import { toggleToDoItemAction } from "../../../store/todolist/todolist.actions";
import "./ToDoItem.styles.css";

type Props = {
  todo: ToDoItemData;
};

export function ToDoItem(props: Props) {
  const { dispatch } = React.useContext(ToDoListContext);

  function handleItemDone() {
    dispatch(toggleToDoItemAction(props.todo));
  }

  return (
    <div className="todolist__todo" id={props.todo.id?.toString()}>
      <div className="todolist__icons">
        {props.todo.isDone ? (
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
      <p className="todolist__text">{props.todo.text}</p>
    </div>
  );
}
