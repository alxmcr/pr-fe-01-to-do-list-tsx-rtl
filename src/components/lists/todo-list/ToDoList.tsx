import type { ToDoItemData } from "../../../services/todo-list-service/IToDoListService";
import { ToDoItem } from "../todo-item/ToDoItem";
import "./ToDoList.styles.css";

type Props = {
  todos: ToDoItemData[];
};

export function ToDoList(props: Props) {
  if (props.todos?.length === 0) return <p>Todo list is empty</p>;

  return (
    <>
      {props.todos.map((todo: ToDoItemData) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}
