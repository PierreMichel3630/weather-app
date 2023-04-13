import { margin, percent, px } from "csx";
import { createContext, useContext, useEffect, useState } from "react";
import { media, style } from "typestyle";
import { getCurrentWeather, getForecastWeather } from "../api/weather";
import { CurrentWeatherComponent } from "../component/CurrentWeather";
import { ForecastComponent } from "../component/Forecast";
import { SelectUniteTemperature } from "../component/SelectUniteTemperature";
import { TodayHighlights } from "../component/TodayHighlights";
import { CurrentWeather } from "../model/CurrentWeather";
import { Forecast } from "../model/Forecast";
import { Location } from "../model/Location";
import { Temperature } from "../model/Unity";

const body = style(
  {
    display: "flex",
    height: "100vh",
  },
  media(
    { minWidth: 0, maxWidth: 1000 },
    {
      flexDirection: "column",
      justifyContent: "space-between",
    }
  ),
  media(
    { minWidth: 1000 },
    {
      flexDirection: "row",
      justifyContent: "space-between",
    }
  )
);

const divLeft = style({
  flex: 1,
});

const divRight = style({
  flex: 2,
  margin: margin(0, 15),
  display: "flex",
  justifyContent: "center",
});

const divInfos = style({
  maxWidth: px(860),
  width: percent(100),
});

export const LocationContext = createContext<any>(null);
export const ThemeContext = createContext<any>(null);
export const UniteContext = createContext<any>(null);

const Angers: Location = {
  id: 758324,
  name: "Angers",
  region: "Pays de la Loire",
  country: "France",
  lat: 47.47,
  lon: -0.55,
  url: "angers-pays-de-la-loire-france",
};

export const Home = () => {
  const NUMBER_DAY_OF_FORECAST = 5;
  const [location, setLocation] = useState<Location>(Angers);
  const [unite, setUnite] = useState<Temperature>(Temperature.DEGREE);

  const [currentWeather, setCurrentWeather] = useState<
    CurrentWeather | undefined
  >(undefined);
  const [loadingCurrent, setLoadingCurrent] = useState<boolean>(true);

  const [forecast, setForecast] = useState<Forecast | undefined>(undefined);
  const [loadingForecast, setLoadingForecast] = useState<boolean>(true);

  useEffect(() => {
    if (location) {
      getCurrentWeather(location.lon, location.lat).then((currentWeather) => {
        setLoadingCurrent(false);
        setCurrentWeather(currentWeather);
      });
      getForecastWeather(
        location.lon,
        location.lat,
        NUMBER_DAY_OF_FORECAST
      ).then((forecastWeather) => {
        setLoadingForecast(false);
        setForecast(forecastWeather);
      });
    }
  }, [location]);

  return (
    <UniteContext.Provider value={{ unite, setUnite }}>
      <LocationContext.Provider value={[location, setLocation]}>
        <div className={body}>
          <div className={divLeft}>
            <CurrentWeatherComponent currentWeather={currentWeather} />
          </div>
          <div className={divRight}>
            <div className={divInfos}>
              <SelectUniteTemperature
                unite={unite}
                change={(value) => setUnite(value)}
              />
              {forecast && <ForecastComponent forecast={forecast} />}
              {currentWeather && (
                <TodayHighlights currentWeather={currentWeather} />
              )}
            </div>
          </div>
        </div>
      </LocationContext.Provider>
    </UniteContext.Provider>
  );
};
