import { CityOption } from "./type";
import cities from "./cities.json";

export function getCityById(id: string): CityOption | undefined {
  return cities.find(({ link }) => link === id);
}
