import { useContext, createContext, useState, useEffect } from "react";

import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = () => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("Paris");
  const [location, setLocation] = useState("");
};
