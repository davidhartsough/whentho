import { redirect, type LoaderFunctionArgs } from "react-router-dom";
import { isValidHourNumber } from "../datetimezonemath";

export type LoaderData = {
  hours: number[];
  days: number[];
};

const keyNums = ["0", "1", "2", "3", "4", "5", "6"];

export default function pollLoader({ request }: LoaderFunctionArgs) {
  const { searchParams } = new URL(request.url);
  // TODO
  const data: LoaderData = { hours: [], days: [] };
  const hoursParam = searchParams.get("h");
  if (hoursParam && hoursParam.length > 0) {
    const hoursNumbers = hoursParam
      .split("-")
      .map(Number)
      .filter(isValidHourNumber)
      .sort();
    data.hours = hoursNumbers;
  } else {
    throw redirect("/");
  }
  keyNums.forEach((keyNum, index) => {
    const day = searchParams.get(`d${keyNum}`);
    if (day === "1") {
      data.days.push(index);
    }
  });
  if (data.days.length < 1) {
    throw redirect("/");
  }
  return data;
}
