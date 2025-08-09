export type TodoItemData = {
  id: number;
  text: string;
  isDone: boolean;
};

export interface IToDoListService {
  findByAll(): Promise<TodoItemData[]>;
}
