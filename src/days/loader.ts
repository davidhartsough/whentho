import { redirect, type LoaderFunctionArgs } from "react-router-dom";
import {
  hours as hoursTitles,
  hoursNumbers,
  isValidHourNumber,
} from "../datetimezonemath";

function getIndex(n: number): number {
  return n <= 23 ? n : n - 24;
}

export default function daysLoader({ request }: LoaderFunctionArgs) {
  const { searchParams } = new URL(request.url);
  const hourIndexesStr = searchParams.get("h");
  if (hourIndexesStr && hourIndexesStr.length > 0) {
    const hourIndexes = hourIndexesStr
      .split("-")
      .map(Number)
      .filter(isValidHourNumber);
    const indexes = hourIndexes.map((hi) => getIndex(hi + 5));
    const hours = indexes
      .map((i) => ({
        text: hoursTitles[i],
        num: hoursNumbers[i],
      }))
      .sort((a, b) => a.num - b.num);
    return { hours };
  }
  throw redirect("/");
}
