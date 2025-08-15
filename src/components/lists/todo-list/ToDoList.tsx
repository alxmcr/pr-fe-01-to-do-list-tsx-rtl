import type { ToDoItemData } from "../../../services/todo-list-service/IToDoListService";
import { ToDoItem } from "../todo-item/ToDoItem";
import "./ToDoList.styles.css";

type Props = {
  todos: ToDoItemData[];
};

export function ToDoList(props: Props) {
  if (props.todos.length === 0) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <p className="text-2xl">Todo list is empty</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      {props.todos.map((todo: ToDoItemData) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
