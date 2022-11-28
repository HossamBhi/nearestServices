import { t } from "i18next";
import React, { useState } from "react";
import { View } from "react-native";
import BlockButton from "../../components/common/BlockButton";
import TextInputWithHeader from "../../components/common/TextInputWithHeader";
import Header from "../../components/loginModule/Header";
import {
  checkEmailValidation,
  checkPasswordValidation,
} from "../../utils/helper";
import SubButton from "../../components/loginModule/SubButton";
import { useNavigation, useTheme } from "@react-navigation/native";
import SocialMediaPart from "../../components/loginModule/SocialMediaPart";
import CustomeButton from "../../components/common/CustomeButton";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();
  const handleOnSubmit = () => {
    if (checkEmailValidation(email) && checkPasswordValidation(password)) {
      navigation.navigate("Tabs" as never);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header text={t("login")} hideBack />
      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 70 }}>
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
        <SubButton
          text={t("FYP")}
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            marginBottom: 35,
          }}
          onPress={() => navigation.navigate("ForgetPass" as never)}
        />
        <BlockButton
          disabled={
            checkEmailValidation(email) && checkPasswordValidation(password)
              ? false
              : true
          }
          text={t("login")}
          onPress={handleOnSubmit}
        />
        <CustomeButton
          text={t("createNewAccount")}
          style={{ paddingTop: 30 }}
          textStyle={{
            fontWeight: "800",
            color: colors.primary,
            textAlign: "center",
          }}
          onPress={() => navigation.navigate("Register" as never)}
        />
        <SocialMediaPart text={t("orLoginWith")} />
      </View>
    </View>
  );
}
