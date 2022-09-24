import { useNavigation } from "@react-navigation/native";
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
import Animated, { Layout, ZoomIn } from "react-native-reanimated";
import useRFontValue from "../../hooks/useRFontValue";
import CustomeText from "./CustomeText";

const ItemGrid = ({ item }: { item: {} }) => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();
  const { id, title, des, image, count } = item;
  const topicHeight = (height - (StatusBar.currentHeight || 0)) / 2.8;

  return (
    <Animated.View
      style={[
        styles.topic,
        {
          height: topicHeight + 10,
          paddingHorizontal: 5,
          paddingVertical: 5,
        },
      ]}
      entering={ZoomIn}
      layout={Layout}
    >
      <Pressable
        style={{ flex: 1 }}
        onPress={() => navigation.navigate("Places", { id })}
      >
        <ImageBackground
          source={{ uri: image }}
          imageStyle={{ borderRadius: 10 }}
          style={[styles.topic, { height: topicHeight }]}
          resizeMode="cover"
        >
          <View style={[styles.overlay, { height: topicHeight }]}>
            <CustomeText
              style={[
                styles.topicTitle,
                { color: "#FFFFFF", fontSize: useRFontValue(18) },
              ]}
            >
              {title}
            </CustomeText>
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
    </Animated.View>
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

export default ItemGrid;
