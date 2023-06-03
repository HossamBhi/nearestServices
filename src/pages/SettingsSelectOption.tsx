import React, { useCallback } from "react";
import { FlatList } from "react-native";
import RowComponent from "../components/common/RowComponent";
import SelectOptionCircle from "../components/common/SelectOptionCircle";
import { changeThemeAction } from "../redux/appSettings";
import { useDispatch } from "react-redux";

const SettingsSelectOption = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { items, selectedOption, isTheme } = route?.params || {};

  const handleCheck = useCallback((item) => {
    if (isTheme) {
      dispatch(changeThemeAction(item));
    }
    navigation.goBack();
  }, []);

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.value}
      renderItem={({ item }) => (
        <RowComponent
          onPress={() => handleCheck(item)}
          title={item.title}
          leftPart={
            <SelectOptionCircle
              handleCheck={() => handleCheck(item)}
              value={item.value}
              checked={item.value == selectedOption}
            />
          }
        />
      )}
    />
  );
};

export default SettingsSelectOption;
