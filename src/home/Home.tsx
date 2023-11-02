import { Link } from "react-router-dom";
import useTitle from "../title/useTitle";
import Header from "../header/Header";
import "./home.css";

export default function Home() {
  useTitle();
  return (
    <section id="home">
      <Header text="steps" />
      <div className="flex center">
        <Link to="/c" className="step button">
          Pick Cities
        </Link>
        <span className="arrow">→</span>
        <Link to="/t" className="step button">
          Pick Times
        </Link>
        <span className="arrow">→</span>
        <Link to="/d" className="step button">
          Pick Days
        </Link>
      </div>
    </section>
  );
}
