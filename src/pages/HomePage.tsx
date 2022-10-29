import { useNavigation } from "@react-navigation/native";
import { t } from "i18next";
import React from "react";
import RowComponent from "../components/common/RowComponent";
import PageContainer from "../components/PageContainer";

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <PageContainer>
      <>
        <RowComponent
          title={t("login")}
          onPress={() => navigation.navigate("Login" as never)}
        />
        <RowComponent
          title={t("Register")}
          onPress={() => navigation.navigate("Register" as never)}
        />
        <RowComponent
          title={t("ForgetPass")}
          onPress={() => navigation.navigate("ForgetPass" as never)}
        />
        <RowComponent
          title={t("changePassword")}
          onPress={() => navigation.navigate("ChangePassword" as never)}
        />
        <RowComponent
          title="categories"
          onPress={() => navigation.navigate("Categories" as never)}
        />
        <RowComponent
          title="Settings"
          onPress={() => navigation.navigate("Settings" as never)}
        />
        <RowComponent
          title="Addresses"
          onPress={() => navigation.navigate("Address" as never)}
        />
        <RowComponent
          title="RatingAndReviews"
          onPress={() => navigation.navigate("RatingAndReviews" as never)}
        />
      </>
    </PageContainer>
  );
};

export default HomePage;
