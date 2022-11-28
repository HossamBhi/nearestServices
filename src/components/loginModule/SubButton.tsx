import React from "react";
import CustomeButton, { CustomeButtonProps } from "../common/CustomeButton";
import CustomeIcon from "../common/CustomeIcon";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
export default (props: CustomeButtonProps) => {
  const { colors } = useTheme();
  return (
    <CustomeButton
      {...props}
      icon={
        <CustomeIcon
          Tag={FontAwesome}
          name="long-arrow-right"
          style={{ paddingHorizontal: 12, color: colors.primary }}
        />
      }
    />
  );
};
