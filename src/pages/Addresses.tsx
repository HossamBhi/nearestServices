import { NavigationProp } from "@react-navigation/native";
import { t } from "i18next";
import React, { FC } from "react";
import { FlatList, View } from "react-native";
import { useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import AddressCard from "../components/addresses/AddressCard";
import FloatingButton from "../components/addresses/FloatingButton";
import BlockButton from "../components/common/BlockButton";
import CustomeButton from "../components/common/CustomeButton";
import CustomeIcon from "../components/common/CustomeIcon";
import SimplePageHeader from "../components/pageHeader/SimplePageHeader";
import { addressProps } from "../utils/types";

interface AddressProps {
  navigation: NavigationProp<any>;
}

const Address: FC<AddressProps> = ({ navigation }) => {
  const { colors } = useTheme();

  const { addresses } = useSelector(
    (state: { addresses: addressProps[] | any }) => state.addresses
  );
  return (
    <View style={{ flex: 1 }}>
      <SimplePageHeader title={t("shippingAddresses")} />
      <FlatList
        style={{ paddingHorizontal: 16 }}
        data={addresses}
        renderItem={({ item, index }) => <AddressCard address={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
        ListHeaderComponent={() => <View style={{ height: 30 }} />}
        ListFooterComponent={() => <View style={{ height: 30 }} />}
      />
      <FloatingButton
        onPress={() => navigation.navigate("AddAddress")}
        icon={<CustomeIcon name="plus" color="#ffffff" size={14} />}
        text={t("addAddress")}
      />
      {/* <CustomeButton
        text={<CustomeIcon name="plus" color="#ffffff" />}
        onPress={() => navigation.navigate("AddAddress")}
        style={{
          position: "absolute",
          bottom: 70,
          right: 25,
          backgroundColor: colors.primary,
          borderRadius: 1000,
          padding: 6,
        }}
      /> */}
    </View>
  );
};

export default Address;
