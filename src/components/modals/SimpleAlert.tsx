import { t } from "i18next";
import React from "react";
import { Image, Pressable, View } from "react-native";
import { useTheme } from "react-native-paper";
import BlockButton from "../common/BlockButton";
import CustomeText from "../common/CustomeText";
import ModalContainer from "./ModalContainer";

interface simpleAlert {
  visible: boolean;
  message?: string | number;
  hideImage?: boolean;
  hideModal?: () => void;
}

const SimpleAlert = ({
  visible,
  message,
  hideImage,
  hideModal,
}: simpleAlert) => {
  const { colors } = useTheme();
  return (
    <ModalContainer visible={visible} hideModal={hideModal}>
      <View
        style={{
          backgroundColor: colors.surface,
          margin: 15,
          borderColor: "#707070",
          borderRadius: 20,
          paddingHorizontal: 17,
          paddingTop: !hideImage ? 30 : 54,
          paddingBottom: 30,
        }}
      >
        <Pressable style={{ width: "100%" }}>
          {!hideImage && (
            <Image
              source={require("../../assets/alertExplore.png")}
              style={{
                alignSelf: "center",
                marginBottom: 23,
              }}
            />
          )}
          <CustomeText
            style={{
              textAlign: "center",
              fontSize: 22,
              paddingBottom: 28,
              lineHeight: 23,
            }}
          >
            {message}
          </CustomeText>

          <BlockButton text={t("close")} style={{ marginTop: 10 }} />
        </Pressable>
      </View>
    </ModalContainer>
  );
};

export default SimpleAlert;
