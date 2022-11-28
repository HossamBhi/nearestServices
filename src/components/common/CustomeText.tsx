import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleProp, Text } from "react-native";

interface CustomeTextProps {
  children?: any;
  style?: StyleProp<any>;
  text?: string | number;
}
const CustomeText = ({ children, style, text, ...props }: CustomeTextProps) => {
  const { colors } = useTheme();
  return (
    <Text style={[{ color: colors.text }, style]} {...{ ...props }}>
      {text}
      {children}
    </Text>
  );
};

export default CustomeText;
