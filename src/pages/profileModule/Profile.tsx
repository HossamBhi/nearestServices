import { t } from "i18next";
import React, { useCallback, useMemo, useState } from "react";
import {
  useNavigation,
  useFocusEffect,
  useRoute,
} from "@react-navigation/native";
import { View, StyleSheet, StatusBar, FlatList } from "react-native";
import RowComponent from "../../components/common/RowComponent";
import { ADDRESSES_DUMMY, getAllOrders } from "../../utils/db";
import {
  FontAwesome,
  MaterialIcons,
  Ionicons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import CustomeIcon from "../../components/common/CustomeIcon";
import { useTheme } from "react-native-paper";
import CustomeImage from "../../components/common/CustomeImage";
import SimpleAlert from "../../components/modals/SimpleAlert";

const Profile = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { colors }: any = useTheme();
  const [showAlert, setShowAlert] = useState(false);
  useFocusEffect(
    useCallback(() => {
      if (route.name === "Profile")
        StatusBar.setBackgroundColor(colors.background);
      return () => StatusBar.setBackgroundColor(colors.surface);
    }, [route])
  );
  const rightPart = useCallback(
    (Tag: any, name: string) => (
      <CustomeIcon
        // style={{ alignSelf: "flex-start" }}
        {...{ Tag, name }}
        color={colors.primary}
      />
    ),
    [colors]
  );
  const items = useMemo(
    () => [
      {
        title: t("myOrders"),
        des: "Already have " + getAllOrders.length + " orders",
        onPress: () => navigation.navigate("Orders" as never),
        rightPart: rightPart(FontAwesome5, "boxes"),
      },
      {
        title: t("shippingAddresses"),
        des: ADDRESSES_DUMMY.length + " addresses",
        onPress: () => navigation.navigate("Address" as never),
        rightPart: rightPart(Ionicons, "location"),
      },
      {
        title: t("paymentMethods"),
        des: "You have 2 active method",
        onPress: () => setShowAlert(true),
        rightPart: rightPart(MaterialCommunityIcons, "credit-card-multiple"),
      },
      {
        title: t("promocodes"),
        des: "You have special promocodes",
        rightPart: rightPart(Ionicons, "gift-sharp"),
        onPress: () => setShowAlert(true),
      },

      {
        title: t("changePassword"),
        des: "Change password from here",
        rightPart: rightPart(Entypo, "lock"),
        onPress: () => navigation.navigate("ChangePassword" as never),
      },
      {
        title: t("notifications"),
        des: "You have 3 notification(s)",
        rightPart: rightPart(Ionicons, "notifications-sharp"),
        onPress: () => setShowAlert(true),
      },
      {
        title: t("settings"),
        des: "Themes, languages...",
        rightPart: rightPart(Ionicons, "settings-sharp"),
        onPress: () => navigation.navigate("Settings" as never),
      },
      {
        title: t("logout"),
        onPress: () => navigation.navigate("Login" as never),
        style: { borderBottomWidth: 0 },
        rightPart: rightPart(MaterialIcons, "logout"),
      },
    ],
    []
  );

  const leftPart = useMemo(
    () => (
      <CustomeIcon
        Tag={FontAwesome}
        name="angle-right"
        color={colors.text + "70"}
      />
    ),
    [colors]
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.surface }}>
      <FlatList
        data={items}
        ListHeaderComponent={
          <RowComponent
            style={[styles.profile, { backgroundColor: colors.background }]}
            // style={[styles.profile]}
            onPress={() => setShowAlert(true)}
            title={"Hossam Bhi Pasha"}
            titleStyle={{ fontWeight: "bold" }}
            des={"hossambasha9900@gmail.com"}
            rightPart={
              <CustomeImage
                source={require("../../assets/profile.png")}
                style={styles.profileImg}
              />
            }
          />
        }
        renderItem={({
          item: { onPress, title, des, style, rightPart },
          index,
        }) => (
          <RowComponent
            key={index}
            {...{ title, des, onPress, leftPart, style, rightPart }}
          />
        )}
      />
      <SimpleAlert
        hideModal={() => setShowAlert(false)}
        visible={showAlert}
        message={t("comingSoon") + ""}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    // borderBottomWidth: 0,
    paddingBottom: 28,
    paddingTop: 35,
    alignItems: "flex-start",
  },
  profileImg: {
    width: 74,
    height: 74,
    borderRadius: 1000,
  },
});
export default Profile;
