import React from "react";
import { View, StyleSheet, StyleProp, TextStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CustomeIcon from "../common/CustomeIcon";
import CustomeText from "../common/CustomeText";
import useRFontValue from "../../hooks/useRFontValue";
import CustomeButton from "../common/CustomeButton";

export default function Header({
  text,
  hideBack,
  textStyle,
}: {
  text: string;
  hideBack?: boolean;
  textStyle?: StyleProp<TextStyle>;
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
      <CustomeText
        style={[{ fontSize: useRFontValue(34), paddingTop: 24 }, textStyle]}
      >
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
