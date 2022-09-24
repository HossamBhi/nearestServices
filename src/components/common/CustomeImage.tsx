import React, { useState } from "react";
import { Image, StyleProp, ImageProps } from "react-native";

interface CustomeImageProps {
  source?: any;
  style?: StyleProp<any>;
  resizeMode?: string | any;
}
export default ({ source, style, resizeMode }: CustomeImageProps) => {
  const [imageSource, setImageSource] = useState(source);
  return (
    <Image
      source={imageSource}
      style={[{ minWidth: 30, minHeight: 30 }, style]}
      resizeMode={resizeMode}
      onError={() => setImageSource(require("../../assets/appIcon.png"))}
      loadingIndicatorSource={require("../../assets/loading.jpg")}
    />
  );
};
