import { t } from "i18next";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BlockButton from "../../components/common/BlockButton";
import TextInputWithHeader from "../../components/common/TextInputWithHeader";
import Header from "../../components/loginModule/Header";
import { checkPasswordValidation } from "../../utils/helper";

export default function ChangePassword() {
  const navigation = useNavigation();
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleOnSubmit = () => {
    if (
      checkPasswordValidation(oldPassword) &&
      checkPasswordValidation(password) &&
      password === confirmPass
    ) {
      alert("Saved Successfully.");
      navigation.navigate("Login" as never);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header text={t("changePassword")} />
      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 70 }}>
        <TextInputWithHeader
          title={t("oldPassword")}
          value={oldPassword}
          onChangeText={setOldPassword}
          // validateMsg={t("passwordValidationMsg")}
          // isValidInput={checkPasswordValidation(password)}
          secureTextEntry={true}
        />
        <TextInputWithHeader
          title={t("newPassword")}
          value={password}
          onChangeText={setPassword}
          validateMsg={t("passwordValidationMsg")}
          isValidInput={checkPasswordValidation(password)}
          secureTextEntry={true}
        />
        <TextInputWithHeader
          title={t("confirmNewPassword")}
          value={confirmPass}
          onChangeText={setConfirmPass}
          validateMsg={t("confirmPasswordValidationMsg")}
          isValidInput={
            confirmPass.length > 0 ? password === confirmPass : null
          }
          secureTextEntry={true}
        />

        <BlockButton
          text={t("save")}
          onPress={handleOnSubmit}
          style={{ marginTop: 50 }}
        />
      </View>
    </ScrollView>
  );
}
