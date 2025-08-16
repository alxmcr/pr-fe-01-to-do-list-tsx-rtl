import React from "react";
import {
  getNameDay,
  internationalizationDate,
} from "../../../helpers/date-helpers";
import { ToDoListContext } from "../../../providers/to-do-list-provider/ToDoListContext";
import { ToDoAddForm } from "../../forms/todo-add-form/ToDoAddForm";
import { ToDoList } from "../../lists/todo-list/ToDoList";
import "./ToDoListCard.styles.css";
import type { ToDoItemData } from "../../../services/todo-list-service/IToDoListService";

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
      <p className="todolist-card__day" data-cy="card-day">
        {dateFormatted}
      </p>
      <p className="todolist-card__nameday" data-cy="card-name-day">
        {nameDay}
      </p>
    </header>
  );
}

function ToDoListFooterCard() {
  return (
    <footer className="p-2">
      <ToDoAddForm />
      <small className="App__attribution">
        Thanks! Icons by Font-Aweasome, favicon by Adri Ansyah, and Photo by
        Glenn Carstens-Peters on Unsplash.
      </small>
    </footer>
  );
}

type Props = {
  todos: ToDoItemData[];
};

function ToDoListBodyCard({ todos = [] }: Props) {
  if (todos?.length === 0) {
    return (
      <div className="todolist-card__body">
        <p className="text-2xl" data-cy="card-empty-msg">
          Todo list is empty
        </p>
      </div>
    );
  }

  return (
    <div className="todolist-card__body">
      <ToDoList todos={todos} />
    </div>
  );
}

export function ToDoListCard() {
  const { state } = React.useContext(ToDoListContext);

  return (
    <article className="bg-white flex flex-col w-screen h-screen md:w-[350px] md:h-[500px]">
      <ToDoListHeaderCard />
      <ToDoListBodyCard todos={state.todos} />
      <ToDoListFooterCard />
    </article>
  );
}
