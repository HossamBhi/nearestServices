import React from "react";
import CustomeButton, { CustomeButtonProps } from "../common/CustomeButton";
import CustomeIcon from "../common/CustomeIcon";
import { FontAwesome } from "@expo/vector-icons";
export default (props: CustomeButtonProps) => (
  <CustomeButton
    {...props}
    icon={
      <CustomeIcon
        Tag={FontAwesome}
        name="long-arrow-right"
        style={{ paddingHorizontal: 12, color: "#FF9431" }}
      />
    }
  />
);
