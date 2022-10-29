import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

import CustomeButton from "../common/CustomeButton";
import CustomeImage from "../common/CustomeImage";
import CustomeText from "../common/CustomeText";

const SocialLogo = ({ source, color }: any) => {
  return (
    <CustomeButton
      style={[styles.logo, { backgroundColor: color }]}
      onPress={() => alert("Coming Soon.")}
    >
      <CustomeImage source={source} style={styles.logoImg} />
    </CustomeButton>
  );
};

export default function SocialMediaPart({ text }: { text: string }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <CustomeText>{text}</CustomeText>
      <View style={{ flexDirection: "row" }}>
        <SocialLogo
          source={require("../../assets/google.png")}
          color={colors.surface}
        />
        <SocialLogo
          source={require("../../assets/facebook.png")}
          color={colors.surface}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 50,
    paddingTop: 50,
  },
  logo: {
    margin: 16,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // shadow
    shadowColor: "#00000005",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 1,
  },
  logoImg: { width: 24, height: 24 },
});
