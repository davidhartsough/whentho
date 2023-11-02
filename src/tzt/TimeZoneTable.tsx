import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../title/useTitle";
import Header from "../header/Header";
import ApproxLocale from "../locale/ApproxLocale";
import { hours } from "../datetimezonemath";
import Hour from "./Hour";
import type { LoaderData } from "./types";
import "./tzt.css";

export default function TimeZoneTable() {
  useTitle("times");
  const { columns } = useLoaderData() as LoaderData;
  const [selected, setSelected] = useState<number[]>([]);
  const select = (hourIndex: number) => {
    const selectedIndex = selected.indexOf(hourIndex);
    if (selectedIndex > -1) {
      setSelected(selected.filter((s) => s !== hourIndex));
    } else {
      setSelected([...selected, hourIndex]);
    }
  };
  return (
    <section id="timezonetable">
      <Header text="pick times" />
      <div className="center small">
        <div className="headers flex">
          {columns.map(({ titles }, index) => (
            <div key={`${titles.join("")}-header`} className="col col-header">
              {index === 0 ? (
                <p>
                  <span>
                    [You] <ApproxLocale />
                  </span>
                  {titles.length > 1 ? ` / ${titles.slice(1).join(" / ")}` : ""}
                </p>
              ) : (
                <p>{titles.join(" / ")}</p>
              )}
            </div>
          ))}
        </div>
        <div id="tzt">
          {hours.map((hour, hourIndex) => (
            <div
              key={`${hour}-${hourIndex}`}
              className={`flex row ${
                selected.includes(hourIndex) ? "selected" : ""
              }`}
              onClick={() => select(hourIndex)}
            >
              {columns.map(({ busy, tzNum }) => (
                <div
                  key={`${hour}-${hourIndex}-${tzNum}`}
                  className={`col ${busy ? "busy" : "free"}`}
                >
                  <Hour hourNum={tzNum + hourIndex} />
                </div>
              ))}
              {selected.includes(hourIndex) && (
                <div className="selected-overlay" />
              )}
            </div>
          ))}
        </div>
      </div>
      <form action="/d" method="GET">
        <input type="hidden" name="h" value={selected.join("-")} />
        <div className="center">
          <button type="submit" disabled={selected.length === 0}>
            Next Step
          </button>
        </div>
      </form>
    </section>
  );
}
