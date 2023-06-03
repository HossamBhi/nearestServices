import * as React from "react";
import { RadioButton } from "react-native-paper";

const SelectOptionCircle = ({ checked, handleCheck, value }) => (
  <RadioButton
    value={value}
    status={checked ? "checked" : "unchecked"}
    onPress={handleCheck}
  />
);

export default SelectOptionCircle;
