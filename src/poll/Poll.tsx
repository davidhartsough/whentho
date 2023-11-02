import { useLoaderData } from "react-router-dom";
import Header from "../header/Header";
import useTitle from "../title/useTitle";
import { daysOfTheWeek } from "../datetimezonemath";
import type { LoaderData } from "./loader";

export default function Poll() {
  useTitle("poll");
  const { hours, days } = useLoaderData() as LoaderData;
  return (
    <section id="poll">
      <Header text="poll" />
      <p>Poll</p>
      <p>{days.map((di) => daysOfTheWeek[di]).join(", ")}</p>
      <p>{hours.join(", ")}</p>
    </section>
  );
}
