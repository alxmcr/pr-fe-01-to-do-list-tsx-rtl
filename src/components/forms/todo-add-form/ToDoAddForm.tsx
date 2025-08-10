import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ToDoListContext } from "../../../providers/to-do-list-provider/ToDoListContext";
import type { ToDoItemData } from "../../../services/todo-list-service/IToDoListService";
import { addToDoItemAction } from "../../../store/todolist/todolist.actions";
import "./ToDoAddForm.styles.css";

export function ToDoAddForm() {
  const [text, setText] = React.useState<string>("");
  const { dispatch } = React.useContext(ToDoListContext);

  function onChangeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();

    // ToDoItem
    const todoitem: ToDoItemData = {
      id: uuidv4(),
      text,
      isDone: false,
    };

    // Action
    dispatch(addToDoItemAction(todoitem));

    // Reset input
    setText("");
  }

  return (
    <form className="todolist__form" onSubmit={onSubmit}>
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        className="todolist__input"
        placeholder="Enter the task's description"
        id="description"
        name="description"
        required={true}
        value={text}
        onChange={onChangeText}
      />
      <button type="submit" className="todolist__button">
        <i className="fas fa-plus todolist__icon--plus"></i>
        <span className="todolist__btntext">ADD NEW</span>
      </button>
    </form>
  );
}
