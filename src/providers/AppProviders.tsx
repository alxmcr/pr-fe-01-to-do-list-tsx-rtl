import { ToDoListProvider } from "./to-do-list-provider";

type Props = {
  children: React.ReactNode;
};

export function AppProviders({ children }: Props) {
  return <ToDoListProvider>{children}</ToDoListProvider>;
}
