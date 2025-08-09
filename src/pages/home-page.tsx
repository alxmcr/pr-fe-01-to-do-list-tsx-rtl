import { ToDoListCard } from "../components/cards/todo-list-card/ToDoListCard";
import "./home-page.css";

export default function HomePage() {
  return (
    <main className="home-page">
      <ToDoListCard />
      <small className="App__attribution">
        Thanks! Icons by Font-Aweasome, favicon by Adri Ansyah, and Photo by
        Glenn Carstens-Peters on Unsplash.
      </small>
    </main>
  );
}
