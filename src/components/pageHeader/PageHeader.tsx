import React, { useState } from "react";
import { StyleProp, StyleSheet, View } from "react-native";
import CustomeButton from "../common/CustomeButton";
import { useNavigation } from "@react-navigation/native";
import { IMAGES_URL } from "../../utils/config";
import CustomeIcon from "../common/CustomeIcon";
import CustomeImage from "../common/CustomeImage";
import { useTheme } from "react-native-paper";
// import CustomePicker from "../CustomePicker";

interface PageHeaderProps {
  children?: JSX.Element;
  viewType?: number;
  setViewType?: (x: any) => void;
  style?: StyleProp<any>;
}

const PageHeader = ({ viewType = 0, setViewType, style }: PageHeaderProps) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <View
      style={[
        styles.container,
        styles.boxShadow,
        { backgroundColor: colors.surface, shadowColor: colors.text },
        style,
      ]}
    >
      <CustomeImage
        source={require("../../assets/appIcon.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={{ flexDirection: "row" }}>
        <CustomeButton
          onPress={() => setShowSearch(true)}
          icon={
            <CustomeIcon
              name="search"
              style={[styles.icon, { backgroundColor: colors.primary }]}
              size={22}
            />
          }
        />
        {viewType !== 0 && setViewType && (
          <CustomeButton
            onPress={() => setViewType(viewType === 1 ? 2 : 1)}
            icon={
              <CustomeIcon
                name={viewType === 1 ? "list" : "grid"}
                style={[styles.icon, { backgroundColor: colors.primary }]}
              />
            }
          />
        )}
        <CustomeButton
          onPress={() => navigation.navigate("Settings")}
          icon={
            <CustomeIcon
              name="settings"
              size={22}
              style={[styles.icon, { backgroundColor: colors.primary }]}
            />
          }
        />
      </View>
      {/* <CustomePicker
        visible={showSearch}
        onRequestClose={() => setShowSearch(false)}
      /> */}
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
export default PageHeader;
