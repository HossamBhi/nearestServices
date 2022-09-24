import React from "react";
import { StyleProp } from "react-native";
import { useTheme } from "react-native-paper";
import CustomeButton from "../common/CustomeButton";
import CustomeIcon from "../common/CustomeIcon";

interface FloatingProps {
  onPress: () => void;
  text?: string;
  icon?: any;
  [key: string]: any;
  style?: StyleProp<any>;
}
export default ({ onPress, text, icon, style, ...props }: FloatingProps) => {
  const { colors } = useTheme();
  return (
    <CustomeButton
      icon={icon || <CustomeIcon name="plus" color="#ffffff" />}
      text={text}
      onPress={onPress}
      style={[
        {
          position: "absolute",
          bottom: 40,
          right: 25,
          backgroundColor: colors.primary,
          borderRadius: 1000,
          paddingVertical: 6,
          paddingHorizontal: 8,
          flexDirection: "row-reverse",
          alignItems: "center",
        },
        style,
      ]}
      textStyle={{ color: "#ffffff", fontSize: 11, paddingHorizontal: 4,}}
      {...props}
    />
  );
};
