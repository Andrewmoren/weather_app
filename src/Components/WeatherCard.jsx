import React from "react";

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
