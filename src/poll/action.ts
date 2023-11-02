import { ActionFunctionArgs, redirect } from "react-router-dom";
import { getTimestamps, isValidHourNumber } from "../datetimezonemath";

export type LoaderData = {
  hours: number[];
  days: number[];
};

const keyNums = ["0", "1", "2", "3", "4", "5", "6"];

export default async function pollAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  console.log("HELLLLLO");
  const hoursParam = formData.get("h");
  if (!hoursParam) {
    throw redirect("/");
  }
  const hoursParamStr = hoursParam.toString();
  if (hoursParamStr.length < 1) {
    throw redirect("/");
  }
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
  if (days.length < 1) {
    throw redirect("/");
  }
  const timestamps = getTimestamps(days, hours);
  return { ok: true, timestamps };
}
