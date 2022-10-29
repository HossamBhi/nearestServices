import { t } from "i18next";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BlockButton from "../../components/common/BlockButton";
import TextInputWithHeader from "../../components/common/TextInputWithHeader";
import Header from "../../components/loginModule/Header";
import { checkEmailValidation } from "../../utils/helper";
import CustomeText from "../../components/common/CustomeText";

export default function ForgetPass() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleOnSubmit = () => {
    if (checkEmailValidation(email)) {
      alert("Send Successfully.");
      navigation.navigate("HomePage" as never);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header text={t("forgotPassword")} />
      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 70 }}>
        <CustomeText
          style={{ lineHeight: 20, paddingBottom: 16, textAlign: "justify" }}
        >
          {t("forgotPassNote")}
        </CustomeText>
        <TextInputWithHeader
          title={t("email")}
          value={email}
          onChangeText={setEmail}
          isValidInput={checkEmailValidation(email)}
          validateMsg={t("emailValidationMsg")}
        />

        <BlockButton
          text={t("send")}
          onPress={handleOnSubmit}
          style={{ marginTop: 50 }}
        />
      </View>
    </ScrollView>
  );
}
