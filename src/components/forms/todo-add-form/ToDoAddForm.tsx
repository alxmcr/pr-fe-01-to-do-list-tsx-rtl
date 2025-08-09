import React from "react";
import "./ToDoAddForm.styles.css";

export function ToDoAddForm() {
  const [text, setText] = React.useState<string>("");

  function onChangeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
  }

  return (
    <form className="todolist__form" onSubmit={onSubmit}>
      <label htmlFor="text">Description:</label>
      <input
        type="text"
        className="todolist__input"
        placeholder="Enter the task's description"
        id="text"
        name="text"
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
