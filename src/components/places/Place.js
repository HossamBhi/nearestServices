import { t } from "i18next";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ImageBackground,
  StatusBar,
} from "react-native";
import useRFontValue from "../../hooks/useRFontValue";

const Place = ({ item }) => {
  const { height } = useWindowDimensions();
  const { id, title, des, image, count } = item;
  const topicHeight = (height - (StatusBar.currentHeight || 0)) / 3.8;

  return (
    <Pressable
      onPress={() => alert("it is press")}
      style={[styles.topic, { height: topicHeight, margin: 5 }]}
    >
      <ImageBackground
        source={{ uri: image }}
        imageStyle={{ borderRadius: 10 }}
        style={[styles.topic, { height: topicHeight }]}
        resizeMode="cover"
      >
        <View style={[styles.overlay, { height: topicHeight }]}>
          <Text
            style={[
              styles.topicTitle,
              { color: "#FFFFFF", fontSize: useRFontValue(18) },
            ]}
          >
            {title}
          </Text>
          <Text
            style={[styles.topicDescription, { fontSize: useRFontValue(12) }]}
            numberOfLines={3}
          >
            {des}
          </Text>
          <Text
            style={[
              styles.topicDescription,
              { fontSize: useRFontValue(12), textTransform: "uppercase" },
            ]}
          >
            {count} {t("places")}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  topic: { width: "100%", flex: 1, borderRadius: 10 },
  overlay: {
    backgroundColor: "#00000070",
    width: "100%",
    borderRadius: 10,
    justifyContent: "flex-end",
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  topicTitle: {
    textAlign: "center",
    paddingBottom: 10,
    fontWeight: "700",
  },
  topicDescription: { color: "#ddd", textAlign: "center" },
});

export default Place;
