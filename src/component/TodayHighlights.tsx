import { margin, px } from "csx";
import { media, style } from "typestyle";
import { CurrentWeather } from "../model/CurrentWeather";
import { textWhite1 } from "../style/designSystem";
import { PercentBar } from "./Bar";
import { CardHighlight } from "./Card";
import { Wind } from "./Wind";
import { Skeleton } from "./Loading";

const body = style({
  marginTop: px(50),
});
const gridContainer = style(
  {
    display: "grid",
    gap: px(40),
    margin: margin(20, 0),
  },
  media(
    { minWidth: 0, maxWidth: 1000 },
    {
      gridTemplateColumns: "repeat(1,1fr)",
    }
  ),
  media(
    { minWidth: 1000 },
    {
      gridTemplateColumns: "repeat(2,1fr)",
    }
  )
);
interface Props {
  currentWeather?: CurrentWeather;
  isLoading: boolean;
}
export const TodayHighlights = ({ currentWeather, isLoading }: Props) => (
  <div className={body}>
    <h1 className={textWhite1}>Today's HighLights</h1>
    <div className={gridContainer}>
      {isLoading || currentWeather === undefined ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <>
          <CardHighlight
            title="Wind status"
            value={currentWeather.current.wind_kph}
            unite="km/h"
            extra={
              <Wind
                wind_degree={currentWeather.current.wind_degree}
                wind_dir={currentWeather.current.wind_dir}
              />
            }
          />
          <CardHighlight
            title="Humidity"
            value={currentWeather.current.humidity}
            unite="%"
            extra={<PercentBar value={currentWeather.current.humidity} />}
          />
          <CardHighlight
            title="Visibility"
            value={currentWeather.current.vis_km}
            unite="km"
          />
          <CardHighlight
            title="Air Pressure"
            value={currentWeather.current.pressure_mb}
            unite="mb"
          />
        </>
      )}
    </div>
  </div>
);
