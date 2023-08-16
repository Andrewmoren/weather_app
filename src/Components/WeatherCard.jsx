import React, { useEffect } from "react";
import { useState } from "react";
import { useDate } from "../Utils/useDate";

import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import wind from "../assets/icons/wind.png";

import "../index.css";

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

  useEffect(() => {
    if (iconString.toLowerCase().includes("cloud")) {
      setIcon(cloud);
    } else if (iconString.toLowerCase().includes("rain")) {
      setIcon(rain);
    } else if (iconString.toLowerCase().includes("clear")) {
      setIcon(sun);
    } else if (iconString.toLowerCase().includes("thunder")) {
      setIcon(storm);
    } else if (iconString.toLowerCase().includes("fog")) {
      setIcon(fog);
    } else if (iconString.toLowerCase().includes("snow")) {
      setIcon(snow);
    } else if (iconString.toLowerCase().includes("wind")) {
      setIcon(wind);
    }
  }, [iconString]);
  return (
    <div className="w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4">
      <div className="flex w-full just-center, items-center gap-4 mt-12 mb-4">
        <img src={icon} alt="weather_icon" />
        <p className="font-bold text-5xl flex justify0center items-center ">
          {temperature} &deg;C
        </p>
      </div>
      <div className="fint-bold text-center text-xl">{place}</div>
    </div>
  );
};

export default WeatherCard;
