import { percent, px } from "csx";
import moment from "moment";
import { useContext } from "react";
import { style } from "typestyle";
import { getLocation } from "../api/weather";
import { CurrentWeather } from "../model/CurrentWeather";
import { Temperature } from "../model/Unity";
import { LocationContext, UniteContext } from "../page/Home";
import {
  Colors,
  textGray1,
  textGray2,
  textGray3,
  textWhite4,
} from "../style/designSystem";
import { SearchLocationBar } from "./SearchLocationBar";

const body = style({
  backgroundColor: Colors.gray3,
  height: percent(100),
  textAlign: "center",
});

const padding = style({
  padding: percent(5),
});

interface Props {
  currentWeather: CurrentWeather | undefined;
}

export const CurrentWeatherComponent = ({ currentWeather }: Props) => {
  const [location, setLocation] = useContext(LocationContext);
  const { unite } = useContext(UniteContext);

  const localisation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getLocation(
        `${position.coords.latitude},${position.coords.longitude}`
      ).then((result) => {
        setLocation(result[0]);
      });
    });
  };

  return (
    <div className={body}>
      <div className={padding}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 3 }}>
            <SearchLocationBar value={location} setValue={setLocation} />
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <div
              style={{
                color: Colors.white,
                backgroundColor: Colors.gray4,
                borderRadius: percent(50),
                width: "fit-content",
                margin: px(5),
                cursor: "pointer",
              }}
              onClick={localisation}
            >
              <span
                className="material-symbols-outlined"
                style={{ padding: px(9) }}
              >
                my_location
              </span>
            </div>
          </div>
        </div>
        {currentWeather && (
          <>
            <img
              src={currentWeather.current.condition.icon}
              alt=""
              width={202}
            />
            <div>
              <span className={textWhite4}>
                {unite === Temperature.DEGREE
                  ? currentWeather.current.temp_c
                  : currentWeather.current.temp_f}
              </span>
              <span className={textGray2}>{unite}</span>
            </div>
            <p className={textGray1}>{currentWeather.location.name}</p>
            <p className={textGray3}>
              Today - {moment().format("ddd DD MMM YY")}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
