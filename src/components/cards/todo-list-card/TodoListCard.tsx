import {
  getNameDay,
  internationalizationDate,
} from "../../../helpers/date-helpers";
import { ToDoAddForm } from "../../forms/todo-add-form/ToDoAddForm";
import { ToDoList } from "../../lists/todo-list/ToDoList";

function ToDoListHeaderCard() {
  const today = new Date();
  const nameDay = getNameDay(today);

  // i10n
  const options: Intl.DateTimeFormatOptions = {
    dateStyle: "medium",
  };
  const dateFormatted = internationalizationDate(today, options);

  return (
    <header className="todolist__header">
      <p className="todolist__day">{dateFormatted}</p>
      <p className="todolist__nameday">{nameDay}</p>
    </header>
  );
}

export function ToDoListCard() {
  return (
    <article className="todolist">
      <ToDoListHeaderCard />
      <div className="todolist__body">
        <ToDoList todos={[]} />
      </div>
      <footer className="todolist__footer">
        <ToDoAddForm />
      </footer>
    </article>
  );
}
