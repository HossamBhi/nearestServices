import { useNavigation } from "@react-navigation/native";
import { t } from "i18next";
import React, { FC, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import Animated, { Layout, ZoomIn } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveAddressAction } from "../../redux/addresses";
import { addressProps } from "../../utils/types";
import CheckboxWithText from "../common/CheckBoxWithText";
import CustomeButton from "../common/CustomeButton";
import CustomeText from "../common/CustomeText";

interface addressCard {
  address: addressProps;
}

const AddressCard: FC<addressCard> = ({ address }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //   console.log("address: ", address);
  const { activeAddress } = useSelector(
    (state: { addresses: { activeAddress: any } }) => state.addresses
  );
  const handleChangeActiveAddress = useCallback(() => {
    dispatch(changeActiveAddressAction(address.id));
  }, [address]);
  return (
    <Animated.View
      style={[styles.container, { backgroundColor: colors.surface }]}
      entering={ZoomIn}
      layout={Layout}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <CustomeText>{address.addressName}</CustomeText>
        <CustomeButton
          onPress={() =>
            navigation.navigate("AddAddress" as never, { address } as never)
          }
          text={t("edit")}
          textStyle={{
            color: colors.primary,
            lineHeight: 20,
            paddingStart: 10,
          }}
        ></CustomeButton>
      </View>
      <CustomeText style={{ paddingVertical: 7 }}>
        {address.area} {address.streetName} {address.buildingType}{" "}
        {address.buildingName} {address.floorNo} {address.apartmentNumber}
      </CustomeText>
      <CustomeText style={{ paddingBottom: 14 }}>
        {t("mobile")} : {address.mobileNo}
      </CustomeText>
      <CheckboxWithText
        text={t("useAsTheShippingAddress")}
        setChecked={handleChangeActiveAddress}
        checked={address.id == activeAddress}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  text: {},
});

export default AddressCard;
