import React from "react";
import { useDate } from "../Utils/useDate";

import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import wind from "../assets/icons/wind.png";

const WeatherCard = (
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditios
) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();
  return <div></div>;
};

export default WeatherCard;
