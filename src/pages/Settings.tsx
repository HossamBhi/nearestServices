import React from "react";
import { ScrollView, useColorScheme } from "react-native";
import CustomeIcon from "../components/common/CustomeIcon";
import RowComponent from "../components/common/RowComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { t } from "i18next";
import { _getAppThemes } from "../utils/appDB";
import { useDispatch, useSelector } from "react-redux";

export default ({ navigation }) => {
  const { activeTheme } = useSelector((state) => state.appSettings);
  console.log("appSettings: ", activeTheme);
  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 12 }}>
      <RowComponent
        title={t("theme")}
        des={activeTheme.title}
        onPress={() =>
          navigation.navigate("SettingsSelectOption", {
            items: _getAppThemes(),
            selectedOption: activeTheme.value,
            isTheme: true,
          })
        }
        rightPart={
          <CustomeIcon
            Tag={MaterialCommunityIcons}
            name="theme-light-dark"
            size={24}
          />
        }
      />
    </ScrollView>
  );
};
