import { type ChangeEventHandler, useState } from "react";
import type { CityOption } from "./type";
import cities from "./cities.json";
import "./select.css";

type CityOptions = typeof cities;

export default function CitySelector({ number }: { number: number }) {
  const checkboxId = `b${number}`;
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  const [options, setOptions] = useState<CityOptions>([]);
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setInput(target.value);
    if (city) setCity("");
    if (target.value.length >= 2) {
      const inputLowerCase = target.value.toLowerCase();
      setOptions(
        cities.filter(({ search }) =>
          search.some((t) => t.startsWith(inputLowerCase))
        )
      );
    } else {
      setOptions([]);
    }
  };
  const selectCity = ({ city, link }: CityOption) => {
    setCity(link);
    setInput(city);
  };
  return (
    <div className="city-selector">
      <div className="city-searcher">
        <input
          type="text"
          value={input}
          autoComplete="off"
          onChange={handleChange}
          placeholder="Search for a city"
          className="city-search"
        />
        {options.length > 0 && city === "" && (
          <div className="city-options">
            {options.map((c) => (
              <div
                key={`${c.link}${number}`}
                className="city-option"
                onClick={() => selectCity(c)}
              >
                {c.city}, {c.country}
              </div>
            ))}
          </div>
        )}
      </div>

      <input type="hidden" name={`c${number}`} value={city} />

      {city === "" ? (
        <div className="busy-box" />
      ) : (
        <label htmlFor={checkboxId} className="busy-box">
          <input type="checkbox" id={checkboxId} name={checkboxId} value="1" />
          Busy 9-5
        </label>
      )}
    </div>
  );
}
