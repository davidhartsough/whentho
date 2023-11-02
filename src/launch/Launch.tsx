import { useState } from "react";
import useTitle from "../title/useTitle";
import Header from "../header/Header";
import ApproxLocale from "../locale/ApproxLocale";
import CitySelector from "../cities/Select";
import ImBusyCheckbox from "./ImBusyCheckbox";
import "./launch.css";

export default function Launch() {
  useTitle("cities");
  const [currSelect, setCurrSelect] = useState(2);
  const [showSelect2, setShowSelect2] = useState(false);
  const [showSelect3, setShowSelect3] = useState(false);
  const [showSelect4, setShowSelect4] = useState(false);
  const [showSelect5, setShowSelect5] = useState(false);
  const addSelect = () => {
    switch (currSelect) {
      case 2:
        setShowSelect2(true);
        break;
      case 3:
        setShowSelect3(true);
        break;
      case 4:
        setShowSelect4(true);
        break;
      case 5:
        setShowSelect5(true);
        break;
      default:
        break;
    }
    setCurrSelect(currSelect + 1);
  };
  return (
    <section id="launch">
      <Header text="pick cities" />
      <form action="/t" method="GET">
        <fieldset>
          <div className="city-selector">
            <p className="mock-select">
              [You] <ApproxLocale />
            </p>
            <ImBusyCheckbox />
          </div>
          <CitySelector number={1} />
          {showSelect2 && <CitySelector number={2} />}
          {showSelect3 && <CitySelector number={3} />}
          {showSelect4 && <CitySelector number={4} />}
          {showSelect5 && <CitySelector number={5} />}
          <div className="actions">
            {currSelect < 5 && (
              <button type="button" onClick={addSelect}>
                Add a city
              </button>
            )}
            <button type="submit">Check it out</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
