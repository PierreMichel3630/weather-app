import { CurrentWeather } from "../model/CurrentWeather";
import { Forecast } from "../model/Forecast";
import { Location } from "../model/Location";

const key = "98e51c8ddacd440db8f92711231003";
const apiUrl = "https://api.weatherapi.com/v1"
export const getLocation = (search: string): Promise<Array<Location>> => {
  const url = `${apiUrl}/search.json?key=${key}&q=${search}`;
  return fetch(url, {
    method: "GET",
  }).then((res) => res.json());
};

export const getCurrentWeather = (
  lon: number,
  lat: number
): Promise<CurrentWeather> => {
  const url = `${apiUrl}/current.json?key=${key}&q=${lat},${lon}`;
  return fetch(url, {
    method: "GET",
  }).then((res) => res.json());
};

export const getForecastWeather = (
  lon: number,
  lat: number,
  daysInFuture: number
): Promise<Forecast> => {
  const url = `${apiUrl}/forecast.json?key=${key}&q=${lat},${lon}&days=${daysInFuture}`;
  return fetch(url, {
    method: "GET",
  }).then((res) => res.json());
};
