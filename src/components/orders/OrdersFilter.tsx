import { t } from "i18next";
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import CustomeText from "../common/CustomeText";

const Tab = ({
  activeFilter,
  setActiveFilter,
  value,
  text,
}: {
  activeFilter: string;
  setActiveFilter: (x: string) => void;
  value: string;
  text: string;
}) => {
  const { colors } = useTheme();
  const isActive = () => activeFilter === value;
  return (
    <TouchableOpacity
      onPress={() => setActiveFilter(value)}
      style={[
        styles.tab,
        { backgroundColor: isActive() ? colors.text : colors.background },
      ]}
    >
      <CustomeText
        text={text}
        style={{
          color: !isActive() ? colors.text : colors.background,
        }}
      />
    </TouchableOpacity>
  );
};
export default ({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: string;
  setActiveFilter: (x: string) => void;
}) => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      paddingTop: 24,
      paddingBottom: 30,
      justifyContent: "space-between",
    }}
  >
    <Tab
      {...{ activeFilter, setActiveFilter }}
      value={"delivered"}
      text={t("delivered") + ""}
    />
    <Tab
      {...{ activeFilter, setActiveFilter }}
      value={"processing"}
      text={t("processing") + ""}
    />
    <Tab
      {...{ activeFilter, setActiveFilter }}
      value={"cancelled"}
      text={t("cancelled") + ""}
    />
  </View>
);

const styles = StyleSheet.create({
  tab: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 50,
    marginHorizontal: 10,
  },
});
