import React from "react";
import type { ToDoItemData } from "../services/todo-list-service/IToDoListService";
import { ToDoListService } from "../services/todo-list-service/ToDoListService";

export function useTodos() {
  const [todos, setTodos] = React.useState<ToDoItemData[]>([]);
  const [errorTodos, setErrorTodos] = React.useState<Error | null>(null);
  const [loadStatusTodos, setLoadStatusTodos] = React.useState("idle");

  React.useEffect(() => {
    async function fetchTodos() {
      try {
        setLoadStatusTodos("pending");

        const service = new ToDoListService();
        const data = await service.findByAll();

        setTodos(data);
        setLoadStatusTodos("success");
      } catch (error) {
        setLoadStatusTodos("error");

        if (error instanceof Error) {
          setErrorTodos(error);
        }
      }
    }

    fetchTodos();
  }, []);

  return { todos, errorTodos, loadStatusTodos };
}
