import { useContext, createContext, useState, useEffect } from "react";

import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = () => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("Paris");
  const [location, setLocation] = useState("");

  //fetch api

  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        aggregateHours: "24",
        location: place,
        ContentType: "json",
        unitGroup: "metric",
        shortColumnNames: 0,
      },
    };
  };
};
