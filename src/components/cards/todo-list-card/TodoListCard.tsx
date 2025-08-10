import React from "react";
import {
  getNameDay,
  internationalizationDate,
} from "../../../helpers/date-helpers";
import { ToDoListContext } from "../../../providers/to-do-list-provider/ToDoListContext";
import { ToDoAddForm } from "../../forms/todo-add-form/ToDoAddForm";
import { ToDoList } from "../../lists/todo-list/ToDoList";
import "./ToDoListCard.styles.css";

function ToDoListHeaderCard() {
  const today = new Date();
  const nameDay = getNameDay(today);

  // i10n
  const options: Intl.DateTimeFormatOptions = {
    dateStyle: "medium",
  };
  const dateFormatted = internationalizationDate(today, options);

  return (
    <header className="todolist-card__header">
      <p className="todolist-card__day">{dateFormatted}</p>
      <p className="todolist-card__nameday">{nameDay}</p>
    </header>
  );
}

export function ToDoListCard() {
  const { state } = React.useContext(ToDoListContext);

  return (
    <article className="todolist-card">
      <ToDoListHeaderCard />
      <div className="todolist-card__body">
        <ToDoList todos={state.todos} />
      </div>
      <footer className="todolist-card__footer">
        <ToDoAddForm />
      </footer>
    </article>
  );
}
