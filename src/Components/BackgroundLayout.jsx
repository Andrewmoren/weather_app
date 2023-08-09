import React from "react";
import { useStateContext } from "../Context";

//images

import Clear from "../assets/images/Clear.jpg";
import Fog from "../assets/images/fog.png";
import Cloudy from "../assets/images/Cloudy.jpg";
import Rainy from "../assets/images/Rainy.jpg";
import Snow from "../assets/images/snow.jpg";
import Stormy from "../assets/images/Stormy.jpg";
import Sunny from "../assets/images/Sunny.jpg";

const BackgroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (weather.condition) {
      let imageString = weather.condition;
      if (imageString.toLowerCase().includes("clear")) {
        setImage(Clear);
      } else if (imageString.toLowerCase().includes("cloud")) {
        setImage(Cloudy);
      }
    }
  }, [weather]);

  return <div></div>;
};

export default BackgroundLayout;
