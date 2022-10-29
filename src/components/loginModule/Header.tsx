import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CustomeIcon from "../common/CustomeIcon";
import CustomeText from "../common/CustomeText";
import useRFontValue from "../../hooks/useRFontValue";
import CustomeButton from "../common/CustomeButton";

export default function Header({
  text,
  hideBack,
}: {
  text: string;
  hideBack?: boolean;
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {!hideBack && (
        <CustomeButton
          onPress={() => navigation.goBack()}
          icon={
            <CustomeIcon
              Tag={Ionicons}
              name="chevron-back-outline"
              style={styles.icon}
            />
          }
        />
      )}
      <CustomeText style={{ fontSize: useRFontValue(34), paddingTop: 24 }}>
        {text}
      </CustomeText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  icon: {
    paddingTop: 16,
  },
});
