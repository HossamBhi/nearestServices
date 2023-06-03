import React, { ReactElement } from "react";
import { Pressable, StyleProp, Text } from "react-native";
import { useTheme } from "react-native-paper";
import CustomeText from "./CustomeText";

export interface CustomeButtonProps {
  onPress?: any;
  text?: string | any;
  style?: StyleProp<any>;
  disabled?: boolean;
  textStyle?: StyleProp<any>;
  icon?: any;
  children?: ReactElement<any, any>;
}

export default ({
  disabled,
  text,
  onPress,
  style,
  textStyle,
  icon,
  children,
}: CustomeButtonProps) => {
  const { colors }: any = useTheme();
  return (
    <Pressable
      style={[style, disabled && { backgroundColor: colors.disabled }]}
      onPress={onPress}
      disabled={disabled ? true : false}
    >
      {text && (
        <CustomeText
          style={[textStyle, disabled && { color: colors.onDisabled }]}
        >
          {text}
        </CustomeText>
      )}
      {icon && icon}
      {children && children}
    </Pressable>
  );
};
