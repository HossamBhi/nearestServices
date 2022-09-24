import React from "react";
import { StyleSheet, View } from "react-native";
import CustomeButton from "../common/CustomeButton";
import { useNavigation, useTheme } from "@react-navigation/native";
import { IMAGES_URL } from "../../utils/config";
import CustomeIcon from "../common/CustomeIcon";
import CustomeImage from "../common/CustomeImage";

const SearchHeader = ({ style }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        styles.boxShadow,
        { backgroundColor: colors.primary, shadowColor: colors.text },
        style,
      ]}
    >
      <CustomeButton
        icon={
          <CustomeIcon
            name="search"
            style={[styles.icon, { backgroundColor: colors.primary }]}
            size={22}
          />
        }
      />
      
      <CustomeButton
        icon={
          <CustomeIcon
            name="search"
            style={[styles.icon, { backgroundColor: colors.primary }]}
            size={22}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    padding: 10,
    marginBottom: 5,
    alignItems: "center",
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: { width: "10%", height: 35, backgroundColor: "#ffffff" },
  icon: {
    paddingHorizontal: 6,
    color: "#ffffff",
    height: 35,
    alignItems: "center",
    textAlignVertical: "center",
    borderRadius: 4,
    marginHorizontal: 4,
  },
});
export default SearchHeader;
