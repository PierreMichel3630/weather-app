import { margin, px } from "csx";
import { Fragment, useContext } from "react";
import { media, style } from "typestyle";
import { Forecast } from "../model/Forecast";
import { UniteContext } from "../page/Home";
import { CardWeather } from "./Card";
import { Skeleton } from "./Loading";

interface Props {
  forecast?: Forecast;
  isLoading: boolean;
}

const gridContainer = style(
  {
    display: "grid",
    gap: px(20),
    margin: margin(20, 0),
  },
  media(
    { minWidth: 0, maxWidth: 800 },
    {
      gridTemplateColumns: "repeat(3,1fr)",
    }
  ),
  media(
    { minWidth: 800, maxWidth: 1000 },
    {
      gridTemplateColumns: "repeat(3,1fr)",
    }
  ),
  media(
    { minWidth: 1000 },
    {
      gridTemplateColumns: "repeat(3,1fr)",
    }
  )
);

export const ForecastComponent = ({ forecast, isLoading }: Props) => {
  const { unite } = useContext(UniteContext);

  return (
    <div className={gridContainer}>
      {isLoading || forecast === undefined ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        forecast.forecast.forecastday.map((day) => (
          <Fragment key={day.date_epoch}>
            <CardWeather weather={day} unite={unite} />
          </Fragment>
        ))
      )}
    </div>
  );
};
