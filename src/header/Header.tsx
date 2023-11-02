import { Link } from "react-router-dom";
import "./header.css";

export default function Header({ text }: { text: string }) {
  return (
    <header className="flex">
      <Link to="/">
        <h1>when tho</h1>
      </Link>
      <p> • </p>
      <h2>{text}:</h2>
    </header>
  );
}
