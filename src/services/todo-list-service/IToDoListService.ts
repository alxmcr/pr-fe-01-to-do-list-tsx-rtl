export type ToDoItemData = {
  id: number;
  text: string;
  isDone: boolean;
};

export interface IToDoListService {
  findByAll(): Promise<ToDoItemData[]>;
}
