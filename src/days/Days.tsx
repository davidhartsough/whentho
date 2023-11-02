import type { FormEvent, FormEventHandler } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../title/useTitle";
import Header from "../header/Header";
import {
  daysOfTheWeek,
  getTimestamps,
  isValidHourNumber,
} from "../datetimezonemath";
import "./days.css";

type HourData = {
  text: string;
  num: number;
};
type LoaderData = {
  hours: HourData[];
};

const keyNums = ["0", "1", "2", "3", "4", "5", "6"];

export default function Days() {
  useTitle("times");
  const { hours } = useLoaderData() as LoaderData;
  const handleSubmit: FormEventHandler = (fe: FormEvent<HTMLFormElement>) => {
    fe.preventDefault();
    const form: HTMLFormElement = fe.currentTarget;
    const formData = new FormData(form);
    const hoursParam = formData.get("h");
    if (!hoursParam) return;
    const hoursParamStr = hoursParam.toString();
    if (hoursParamStr.length < 1) return;
    const hours: number[] = hoursParamStr
      .split("-")
      .map(Number)
      .filter(isValidHourNumber)
      .sort();
    const days: number[] = [];
    keyNums.forEach((keyNum, index) => {
      const day = formData.get(`d${keyNum}`);
      if (day === "1") {
        days.push(index);
      }
    });
    if (days.length < 1) return;
    const timestamps = getTimestamps(days, hours);
  };
  return (
    <section id="days">
      <Header text="pick days" />

      <form onSubmit={handleSubmit}>
        <fieldset className="center">
          {daysOfTheWeek.map((day, index) => (
            <label key={day} htmlFor={`d${index}`} className="flex day-box">
              <input
                type="checkbox"
                id={`d${index}`}
                name={`d${index}`}
                value="1"
              />
              <span>{day}</span>
            </label>
          ))}

          <input
            type="hidden"
            name="h"
            value={hours.map(({ num }) => num).join("-")}
          />
        </fieldset>
        <p className="hours-list">
          <strong>Hours</strong>: {hours.map(({ text }) => text).join(", ")}
        </p>
        <div className="center">
          <button type="submit">Create Poll</button>
        </div>
      </form>
    </section>
  );
}
