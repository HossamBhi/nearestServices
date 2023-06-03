import React, { useCallback } from "react";
import { View, StyleSheet, ToastAndroid } from "react-native";
import { useTheme } from "react-native-paper";
import { reviewProps } from "../../utils/types";
import CustomeIcon from "../common/CustomeIcon";
import CustomeImage from "../common/CustomeImage";
import CustomeText from "../common/CustomeText";
import { AntDesign } from "@expo/vector-icons";
import CustomeButton from "../common/CustomeButton";
import { t } from "i18next";
import { FlatList } from "react-native-gesture-handler";

interface ReviewCardProps {
  review: reviewProps;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const { colors } = useTheme();

  const handleHelpful = useCallback(() => {
    ToastAndroid.showWithGravity(
      "Thanks.",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }, [review]);

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <CustomeImage
        source={review.authorImage || require("../../assets/user.png")}
        style={styles.avatar}
      />
      <CustomeText style={styles.name}>{review.authorName}</CustomeText>
      <View style={styles.rateAndDate}>
        {Array.apply(null, Array(review.rate)).map((s, i) => (
          <CustomeIcon
            Tag={AntDesign}
            name="star"
            color="#FFBA49"
            size={14}
            key={i}
            style={{ paddingHorizontal: 1 }}
          />
        ))}
        {Array.apply(null, Array(5 - Number(review.rate || 0))).map((s, i) => (
          <CustomeIcon
            Tag={AntDesign}
            name="staro"
            color="#FFBA49"
            size={14}
            key={i}
            style={{ paddingHorizontal: 1 }}
          />
        ))}
        <CustomeText style={styles.date}>
          {new Date(review.created_at).toDateString()}
        </CustomeText>
      </View>
      <CustomeText style={styles.text}>{review.text}</CustomeText>
      {review.images && review.images?.length > 0 && (
        <FlatList
          data={review.images}
          renderItem={({ item }) => (
            <CustomeImage source={item} style={styles.reviewImage} />
          )}
          horizontal={true}
          style={{ paddingTop: 10 }}
        />
      )}
      <CustomeButton
        text={t("helpful")}
        style={styles.btn}
        textStyle={styles.btnText}
        onPress={handleHelpful}
        icon={
          <CustomeIcon Tag={AntDesign} name="like1" color="#DADADA" size={14} />
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 24,
    borderRadius: 8,
    paddingBottom: 16,
    marginHorizontal: 32,
  },
  name: { fontWeight: "800" },
  rateAndDate: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 11,
    paddingTop: 9,
  },
  text: {
    fontWeight: "300",
    letterSpacing: -0.15,
    opacity: 0.8,
  },
  date: {
    flex: 1,
    fontSize: 11,
    color: "#9B9B9B",
    textAlign: "right",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 100,
    position: "absolute",
    top: -18,
    left: -18,
    // backgroundColor: "#FFFFFF50",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    justifyContent: "flex-end",
  },
  btnText: {
    paddingHorizontal: 4,
    fontSize: 11,
    color: "#9B9B9B",
  },
  reviewImage: {
    width: 104,
    height: 104,
    borderRadius: 4,
    marginEnd: 16,
  },
});

export default ReviewCard;
