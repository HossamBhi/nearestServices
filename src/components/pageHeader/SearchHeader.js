import React from "react";
import { StyleSheet, View } from "react-native";
import CustomeButton from "../common/CustomeButton";
import { useNavigation, useTheme } from "@react-navigation/native";
import { IMAGES_URL } from "../../utils/config";
import CustomeIcon from "../common/CustomeIcon";
import CustomeImage from "../common/CustomeImage";

const SearchHeader = ({ viewType = 0, setViewType, style }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        styles.boxShadow,
        { backgroundColor: colors.background, shadowColor: colors.text },
        style,
      ]}
    >
      <CustomeImage
        source={{ uri: IMAGES_URL + "appMobileLogo.png" }}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={{ flexDirection: "row" }}>
        <CustomeButton
          icon={<CustomeIcon name="search" style={styles.icon} size={22} />}
        />
        {viewType !== 0 && (
          <CustomeButton
            onPress={() => setViewType(viewType === 1 ? 2 : 1)}
            icon={
              <CustomeIcon
                name={viewType === 1 ? "list" : "grid"}
                style={styles.icon}
              />
            }
          />
        )}
        <CustomeButton
          onPress={() => navigation.navigate("Settings")}
          icon={<CustomeIcon name="settings" size={22} style={styles.icon} />}
        />
      </View>
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
  logo: { width: 60, height: 35 },
  icon: { paddingHorizontal: 6 },
});
export default SearchHeader;
