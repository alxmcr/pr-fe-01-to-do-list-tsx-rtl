import { mockToDoList } from "../../mocks/data/mock-to-do-list";
import type { IToDoListService, TodoItemData } from "./IToDoListService";

export class ToDoListService implements IToDoListService {
  findByAll(): Promise<TodoItemData[]> {
    return Promise.resolve(mockToDoList);
  }
}
