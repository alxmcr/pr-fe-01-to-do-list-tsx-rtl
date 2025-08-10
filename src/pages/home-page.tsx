import { ToDoListCard } from "../components/cards/todo-list-card/TodoListCard";
import "./home-page.css";

export default function HomePage() {
  return (
    <main className="home-page">
      <ToDoListCard />
    </main>
  );
}
