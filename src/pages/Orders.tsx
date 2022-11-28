import { NavigationProp } from "@react-navigation/native";
import { t } from "i18next";
import React, { FC, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import SimplePageHeader from "../components/pageHeader/SimplePageHeader";
import AppLoader from "../components/common/AppLoader";
import { orderType } from "../utils/types";

import OrderCard from "../components/cards/OrderCard";
import { getAllOrders } from "../utils/db";
import OrdersFilter from "../components/orders/OrdersFilter";
import { orderStatus } from "../utils/appDB";

interface OrdersProps {
  navigation: NavigationProp<any>;
}

const Orders: FC<OrdersProps> = ({ navigation }) => {
  const [data, setDate] = useState<orderType[] | null>(null);
  const [activeFilter, setActiveFilter] = useState(orderStatus[1]); // it is a string for easy work with multi lang and filter with API
  useEffect(() => setDate(getAllOrders), []);

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <SimplePageHeader title={t("myOrders")} />
      {data === null ? (
        <AppLoader />
      ) : (
        <>
          <FlatList
            data={data.filter((a) => a.orderStatus === activeFilter)}
            renderItem={({ item, index }) => <OrderCard item={item} />}
            ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
            ListHeaderComponent={() => (
              <OrdersFilter {...{ setActiveFilter, activeFilter }} />
            )}
            ListFooterComponent={() => <View style={{ height: 30 }} />}
          />
        </>
      )}
    </View>
  );
};

export default Orders;
