import React, { useState } from "react";
import { Image } from "react-native";

export default ({ source, style, resizeMode }) => {
  const [imageSource, setImageSource] = useState(source);
  return (
    <Image
      source={imageSource}
      style={[{ minWidth: 30, minHeight: 30 }, style]}
      resizeMode={resizeMode ? resizeMode : "contain"}
      onError={() => setImageSource(require("../../assets/appIcon.jpg"))}
    />
  );
};
