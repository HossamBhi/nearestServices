import { NavigationProp } from "@react-navigation/native";
import { t } from "i18next";
import React, { FC } from "react";
import { View } from "react-native";
import SimplePageHeader from "../components/pageHeader/SimplePageHeader";
import { orderType } from "../utils/types";

interface OrderDetailsProps {
  navigation: NavigationProp<any>;
}

const OrderDetails: FC<OrderDetailsProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <SimplePageHeader title={t("orderDetails")} />
    </View>
  );
};

export default OrderDetails;
