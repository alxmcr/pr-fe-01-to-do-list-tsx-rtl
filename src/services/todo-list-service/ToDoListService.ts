import { mockToDoList } from "../../mocks/data/mock-to-do-list";
import type { IToDoListService, ToDoItemData } from "./IToDoListService";

export class ToDoListService implements IToDoListService {
  findByAll(): Promise<ToDoItemData[]> {
    return Promise.resolve(mockToDoList);
  }
}
