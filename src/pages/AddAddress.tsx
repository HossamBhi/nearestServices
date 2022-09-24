import { NavigationProp, useRoute } from "@react-navigation/native";
import { t } from "i18next";
import React, { FC, useCallback, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import BlockButton from "../components/common/BlockButton";
import CustomeIcon from "../components/common/CustomeIcon";
import CustomeTextInput from "../components/common/CustomeTextInput";
import SimplePageHeader from "../components/pageHeader/SimplePageHeader";
import {
  addAddressAction,
  removeAddressAction,
  updateAddressAction,
} from "../redux/addresses";
import { getUniqueId } from "../utils/helper";
import { addressProps } from "../utils/types";

interface AddAddressProps {
  navigation: NavigationProp<any>;
}

const AddAddress: FC<AddAddressProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const route = useRoute();
  const oldAdress = route.params?.address || {};
  const [area, setArea] = useState(oldAdress?.area || "");

  const [streetName, setStreetName] = useState(oldAdress?.streetName || "");
  const [buildingType, setBuildingType] = useState(
    oldAdress?.buildingType || ""
  );
  const [buildingName, setBuildingName] = useState(
    oldAdress?.buildingName || ""
  );
  const [floorNo, setFloorNo] = useState(oldAdress?.floorNo || "");
  const [apartmentNo, setApartmentNo] = useState(oldAdress?.apartmentNo || "");
  const [addressName, setAddressName] = useState(oldAdress?.addressName || "");
  const [landMark, setLandmark] = useState(oldAdress?.landMark || "");
  const [mobileNo, setMobileNo] = useState(oldAdress?.mobileNo || "");
  const [landline, setLandline] = useState(oldAdress?.landline || "");

  const handleSaveAddress = () => {
    let data = {
      id: getUniqueId(),
      created_at: new Date().getTime(),
      ...oldAdress,
      area,
      streetName,
      buildingType,
      buildingName,
      floorNo,
      apartmentNo,
      addressName,
      landMark,
      mobileNo,
      landline,
    };
    navigation.goBack();
    if (oldAdress?.id) {
      return dispatch(
        updateAddressAction({ id: oldAdress.id, newAddress: data })
      );
    }
    return dispatch(addAddressAction(data));
  };
  const handleRemoveAddress = useCallback(() => {
    navigation.goBack();
    dispatch(removeAddressAction(oldAdress.id));
  }, [oldAdress]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ flex: 1 }}>
        {oldAdress.id ? (
          <SimplePageHeader
            title={t("addingShippingAddress")}
            iconRight={<CustomeIcon name="trash" color="#ffffff" />}
            iconRightStyle={{ backgroundColor: colors.error }}
            onPressRight={handleRemoveAddress}
          />
        ) : (
          <SimplePageHeader title={t("addingShippingAddress")} />
        )}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30, paddingTop: 30 }}
          style={{ flex: 1, paddingHorizontal: 16 }}
        >
          <CustomeTextInput
            title={t("addressName")}
            value={addressName}
            onChangeText={setAddressName}
          />
          <CustomeTextInput
            title={t("area")}
            value={area}
            onChangeText={setArea}
          />
          <CustomeTextInput
            title={t("streetName")}
            value={streetName}
            onChangeText={setStreetName}
          />
          <CustomeTextInput
            title={t("buildingType")}
            value={buildingType}
            onChangeText={setBuildingType}
          />
          <CustomeTextInput
            title={t("buildingName")}
            value={buildingName}
            onChangeText={setBuildingName}
          />
          <CustomeTextInput
            title={t("floorNo")}
            value={floorNo}
            onChangeText={setFloorNo}
          />
          <CustomeTextInput
            title={t("apartmentNumber")}
            value={apartmentNo}
            onChangeText={setApartmentNo}
          />
          <CustomeTextInput
            title={t("landmark")}
            value={landMark}
            onChangeText={setLandmark}
          />
          <CustomeTextInput
            title={t("mobileNo")}
            value={mobileNo}
            onChangeText={setMobileNo}
          />
          <CustomeTextInput
            title={t("landlineNo")}
            value={landline}
            onChangeText={setLandline}
          />
          <BlockButton
            text={t("saveAddress")}
            onPress={handleSaveAddress}
            style={{ marginBottom: 20 }}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddAddress;
