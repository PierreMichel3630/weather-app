import { percent, px } from "csx";
import moment from "moment";
import { style } from "typestyle";
import { Forecastday } from "../model/Forecast";
import { Temperature } from "../model/Unity";
import {
  Colors,
  textGray,
  textWhite,
  textWhite2,
  textWhite3,
} from "../style/designSystem";

interface Props {
  title: string;
  value: number;
  unite: string;
  extra?: JSX.Element;
}

const body = style({
  backgroundColor: Colors.gray3,
  padding: percent(5),
  textAlign: "center",
});

export const CardHighlight = ({ title, value, unite, extra }: Props) => (
  <div className={body}>
    <p className={textWhite}>{title}</p>
    <div>
      <span className={textWhite3}>{value}</span>
      <span className={textWhite2}>{unite}</span>
    </div>
    {extra && <div>{extra}</div>}
  </div>
);

const cardWeather = style({
  backgroundColor: Colors.gray3,
  padding: px(10),
  textAlign: "center",
});

const css = style({
  display: "flex",
});

const divTemperature = style({
  flex: 1,
});

interface WeatherProps {
  weather: Forecastday;
  unite: Temperature;
}
export const CardWeather = ({ weather, unite }: WeatherProps) => (
  <div className={cardWeather}>
    <p className={textWhite}>{moment(weather.date).format("ddd DD MMM YY")}</p>
    <img src={weather.day.condition.icon} alt="" />
    <div className={css}>
      <div className={divTemperature}>
        <span className={textWhite}>
          {unite === Temperature.DEGREE
            ? weather.day.mintemp_c
            : weather.day.mintemp_f}{" "}
          {unite}
        </span>
      </div>
      <div className={divTemperature}>
        <span className={textGray}>
          {unite === Temperature.DEGREE
            ? weather.day.maxtemp_c
            : weather.day.maxtemp_f}{" "}
          {unite}
        </span>
      </div>
    </div>
  </div>
);
