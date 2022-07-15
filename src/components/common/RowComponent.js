import React from "react";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import useRFontValue from "../../hooks/useRFontValue";
import CustomeButton from "./CustomeButton";

const RowComponent = ({
  onPress,
  style,
  rightPart,
  leftPart,
  centerPart,
  title,
  des,
}) => {
  const { colors } = useTheme();
  return (
    <CustomeButton onPress={onPress} style={[styles.row, style]}>
      {rightPart && rightPart}
      {centerPart && centerPart}
      {title && (
        <View
          style={{
            paddingHorizontal: 12,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text
            style={{ fontSize: useRFontValue(16), color: colors.text }}
            numberOfLines={2}
          >
            {title}
          </Text>
          {des && (
            <Text
              style={{ fontSize: useRFontValue(12), color: colors.text + "70" }}
              numberOfLines={2}
            >
              {des}
            </Text>
          )}
        </View>
      )}
      {leftPart && leftPart}
    </CustomeButton>
  );
};
const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
});
export default RowComponent;
