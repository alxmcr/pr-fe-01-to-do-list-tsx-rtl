export type ToDoItemData = {
  id: string;
  text: string;
  isDone: boolean;
};

export interface IToDoListService {
  findByAll(): Promise<ToDoItemData[]>;
}
