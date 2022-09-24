import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

// take percentage
const useResponsiveFont = (per) => {
  console.log("props: ", per);
  const { width } = useWindowDimensions();
  const [font, setFont] = useState(14);
  useEffect(() => {
    setFont((font * width) / 100);
    // return () => {
    // };
  }, [width]);
  return font;
};

export default useResponsiveFont;
