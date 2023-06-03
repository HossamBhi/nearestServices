import React from "react";
import Animated, { Layout, ZoomIn } from "react-native-reanimated";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { orderType } from "../../utils/types";
import CustomeText from "../common/CustomeText";
import { useTheme } from "react-native-paper";
import { t } from "i18next";
import CustomeButton from "../common/CustomeButton";

interface rowProps {
  leftPart?: JSX.Element;
  rightPart?: JSX.Element;
  style?: StyleProp<ViewStyle>;
  rightText?: string | number;
  rightTextStyle?: StyleProp<TextStyle>;
  leftText?: string | number;
  leftTextStyle?: StyleProp<TextStyle>;
}
const Row = ({
  leftPart,
  rightPart,
  style,
  rightText,
  rightTextStyle,
  leftText,
  leftTextStyle,
}: rowProps) => (
  <View style={[styles.rowContainer, style]}>
    {leftPart}
    {rightPart}
    {leftText && (
      <CustomeText style={[{ fontSize: 14, color: "#9B9B9B" }, leftTextStyle]}>
        {leftText}
      </CustomeText>
    )}
    {rightText && (
      <CustomeText style={[{ fontSize: 16 }, rightTextStyle]}>
        {rightText}
      </CustomeText>
    )}
  </View>
);

const OrderCard = ({ item }: { item: orderType }) => {
  const { colors } = useTheme();
  return (
    <Animated.View
      entering={ZoomIn}
      layout={Layout}
      style={[
        styles.container,
        { backgroundColor: colors.surface, shadowColor: colors.text },
      ]}
    >
      <TouchableOpacity onPress={() => alert("Go To order details")}>
        <Row
          leftText={item.orderNumber}
          rightText={item.created_at?.toLocaleDateString()}
          leftTextStyle={{ fontSize: 16, color: colors.text }}
          rightTextStyle={{ fontSize: 14, color: "#9B9B9B" }}
        />

        <Row
          style={{ justifyContent: "flex-start" }}
          leftText={t("trackingNumber") + ": "}
          rightText={item.trackingNumber}
        />
        <Row
          leftPart={
            <Row
              style={{ justifyContent: "flex-start" }}
              leftText={t("quantity") + ": "}
              rightText={item.items.length}
            />
          }
          rightPart={
            <Row
              style={{ justifyContent: "flex-end" }}
              leftText={t("totalAmount") + ": "}
              rightText={item.total + " $"}
            />
          }
        />
        <Row
          leftText={t("details") + ""}
          leftTextStyle={[styles.btn, { color: colors.text }]}
          rightTextStyle={{ color: "#2AA952" }}
          rightText={t(item.orderStatus + "") + ""}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    // shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  rowContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 4,
  },
  btn: {
    borderWidth: 1,
    borderRadius: 500,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginTop: 14,
  },
});

export default OrderCard;
