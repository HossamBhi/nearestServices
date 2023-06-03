import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import CustomeButton from "../common/CustomeButton";
import { useNavigation } from "@react-navigation/native";
import CustomeIcon from "../common/CustomeIcon";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import CustomeText from "../common/CustomeText";

interface SimplePageHeaderProps {
  style?: StyleProp<ViewStyle>;
  title?: string;
  iconRight?: JSX.Element;
  onPressRight?: () => void;
  iconRightStyle?: StyleProp<ViewStyle>;
  hideBack?: boolean;
}

const SimplePageHeader = ({
  style,
  title,
  iconRight,
  onPressRight,
  iconRightStyle,
  hideBack,
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
      {!hideBack && (
        <CustomeButton
          onPress={() => navigation.goBack()}
          // style={[styles.icon, { backgroundColor: colors.primary }]}
          icon={
            <CustomeIcon
              Tag={Ionicons}
              name="chevron-back-outline"
            />
          }
        />
      )}
      <CustomeText style={[styles.title, { marginLeft: hideBack ? 0 : -22 }]}>
        {title}
      </CustomeText>
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
