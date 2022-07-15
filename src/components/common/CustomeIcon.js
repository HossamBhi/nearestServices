import React from "react";
import { useTheme } from "react-native-paper";
import useRFontValue from "../../hooks/useRFontValue";
import { Feather } from "@expo/vector-icons";

export default ({ Tag = Feather, name, style, size }) => {
  const { colors } = useTheme();
  return (
    <Tag
      name={name}
      size={useRFontValue(size || 24)}
      color={colors.text}
      style={style}
    />
  );
};
