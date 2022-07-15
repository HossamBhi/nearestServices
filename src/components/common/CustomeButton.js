import React from "react";
import { Pressable, Text } from "react-native";

export default ({
  disabled,
  text,
  onPress,
  style,
  textStyle,
  icon,
  children,
}) => (
  <Pressable
    style={[style, disabled && { backgroundColor: "#dddddd" }]}
    onPress={onPress}
    disabled={disabled ? true : false}
  >
    {text && (
      <Text style={[textStyle, disabled && { color: "#B1B1B1" }]}>{text}</Text>
    )}
    {icon && icon}
    {children && children}
  </Pressable>
);
