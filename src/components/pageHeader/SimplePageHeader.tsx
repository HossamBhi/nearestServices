import React, { useState } from "react";
import { StyleProp, StyleSheet, View } from "react-native";
import CustomeButton from "../common/CustomeButton";
import { useNavigation } from "@react-navigation/native";
import CustomeIcon from "../common/CustomeIcon";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { isRTL } from "../../langs";
import CustomeText from "../common/CustomeText";

interface SimplePageHeaderProps {
  style?: StyleProp<any>;
  title?: string;
  iconRight?: JSX.Element;
  onPressRight?: () => void;
  iconRightStyle?: StyleProp<any>;
}

const SimplePageHeader = ({
  style,
  title,
  iconRight,
  onPressRight,
  iconRightStyle,
}: SimplePageHeaderProps) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        styles.boxShadow,
        { backgroundColor: colors.surface, shadowColor: colors.text },
        style,
      ]}
    >
      <CustomeButton
        onPress={() => navigation.goBack()}
        style={[styles.icon, { backgroundColor: colors.primary }]}
        icon={
          <CustomeIcon
            Tag={Ionicons}
            name={isRTL ? "ios-arrow-forward" : "ios-arrow-back"}
            size={22}
            color={"#ffffff"}
          />
        }
      />
      <CustomeText style={styles.title}>{title}</CustomeText>
      {iconRight && (
        <CustomeButton
          onPress={onPressRight}
          style={[
            styles.icon,
            { backgroundColor: colors.primary },
            iconRightStyle,
          ]}
          icon={iconRight}
        />
      )}
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
    shadowColor: "#00000005",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 1,
  },
  icon: {
    paddingHorizontal: 6,
    color: "#ffffff",
    height: 35,
    alignItems: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginHorizontal: 4,
  },
  title: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 22,
    fontWeight: "700",
  },
});
export default SimplePageHeader;
