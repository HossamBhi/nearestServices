import React from "react";
import { ActivityIndicator, View, Platform } from "react-native";

export default () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <ActivityIndicator size={Platform.OS === "ios" ? "large" : 50} animating />
  </View>
);
