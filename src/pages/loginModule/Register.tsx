import { t } from "i18next";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BlockButton from "../../components/common/BlockButton";
import TextInputWithHeader from "../../components/common/TextInputWithHeader";
import Header from "../../components/loginModule/Header";
import {
  checkEmailValidation,
  checkPasswordValidation,
} from "../../utils/helper";
import SubButton from "../../components/loginModule/SubButton";
import SocialMediaPart from "../../components/loginModule/SocialMediaPart";

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleOnSubmit = () => {
    if (
      checkEmailValidation(email) &&
      checkPasswordValidation(password) &&
      password === confirmPass
    ) {
      alert("Saved Successfully.")
      navigation.navigate("Login" as never);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header text={t("signUp")} />
      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 70 }}>
        <TextInputWithHeader
          title={t("name")}
          value={name}
          onChangeText={setName}
        />
        <TextInputWithHeader
          title={t("email")}
          value={email}
          onChangeText={setEmail}
          isValidInput={checkEmailValidation(email)}
          validateMsg={t("emailValidationMsg")}
        />
        <TextInputWithHeader
          title={t("password")}
          value={password}
          onChangeText={setPassword}
          validateMsg={t("passwordValidationMsg")}
          isValidInput={checkPasswordValidation(password)}
          secureTextEntry={true}
        />
        <TextInputWithHeader
          title={t("confirmPassword")}
          value={confirmPass}
          onChangeText={setConfirmPass}
          validateMsg={t("confirmPasswordValidationMsg")}
          isValidInput={
            confirmPass.length > 0 ? password === confirmPass : null
          }
          secureTextEntry={true}
        />
        <SubButton
          text={t("alreadyHaveAnAccount")}
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            marginBottom: 35,
          }}
          onPress={() => navigation.navigate("Login" as never)}
        />
        <BlockButton text={t("signUp")} onPress={handleOnSubmit} />

        <SocialMediaPart text={t("orSignUpWith")} />
      </View>
    </ScrollView>
  );
}
