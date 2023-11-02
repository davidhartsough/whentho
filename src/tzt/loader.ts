import type { LoaderFunctionArgs } from "react-router-dom";
import type { Col } from "./types";
import { getTimeNumFromZone } from "../datetimezonemath";
import { getCityById } from "../cities/utils";

const keyNums = ["1", "2", "3", "4", "5"];

export default function timeZoneTableLoader({ request }: LoaderFunctionArgs) {
  const { searchParams } = new URL(request.url);
  const columns: Col[] = [
    {
      tzNum: 5,
      titles: ["[You]"],
      busy: searchParams.get("b0") === "1",
    },
  ];
  keyNums.forEach((keyNum) => {
    const cityId = searchParams.get(`c${keyNum}`);
    if (cityId) {
      const cityData = getCityById(cityId);
      if (cityData) {
        const tzHourNum = getTimeNumFromZone(cityData.tz);
        const name = cityData.city;
        const busy = searchParams.get(`b${keyNum}`) === "1";
        const index = columns.findIndex(({ tzNum }) => tzNum === tzHourNum);
        if (index >= 0) {
          columns[index].titles.push(name);
          if (busy) {
            columns[index].busy = true;
          }
        } else {
          columns.push({
            tzNum: tzHourNum,
            titles: [name],
            busy,
          });
        }
      }
    }
  });
  return { columns };
}
