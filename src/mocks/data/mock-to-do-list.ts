import type { ToDoItemData } from "../../services/todo-list-service/IToDoListService";

export const mockToDoList: ToDoItemData[] = [
  {
    id: 1,
    text: "Go to dentist",
    isDone: false,
  },
  {
    id: 2,
    text: "Buy a notebook",
    isDone: true,
  },
  {
    id: 3,
    text: "Read a book",
    isDone: false,
  },
  {
    id: 4,
    text: "Visit to my mom",
    isDone: false,
  },
  {
    id: 5,
    text: "Go to stadium",
    isDone: false,
  },
];
