import type { ChangeEventHandler } from "react";

const imBusyKey = "im-busy";
const getImBusy = () => window.localStorage.getItem(imBusyKey) || null;
const setImBusy = () => window.localStorage.setItem(imBusyKey, "1");

export default function ImBusyCheckbox() {
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (target.checked) setImBusy();
  };
  return (
    <label htmlFor="b0" className="busy-box">
      <input
        type="checkbox"
        id="b0"
        name="b0"
        value="1"
        defaultChecked={getImBusy() === "1"}
        onChange={handleChange}
      />
      Busy 9-5
    </label>
  );
}
