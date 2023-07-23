import { useState } from "react";

export const useDate = () => {
  const locale = "en";
  const [today, setDate] = useState(new Date());
};
