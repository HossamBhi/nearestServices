import { t } from "i18next";
import React from "react";
import { View, StyleSheet } from "react-native";
import CustomeText from "../common/CustomeText";
import RateRow from "./RateRow";

const RatingResult = ({ data }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <CustomeText style={styles.total}>{data.averageRate}</CustomeText>
        <CustomeText style={styles.totalRate}>
          {data.total} {t("ratings")}
        </CustomeText>
      </View>
      <View style={styles.right}>
        <RateRow starsNum={5} rateNum={200} total={5 + 3 + 14 + 1 + 20} />
        <RateRow starsNum={4} rateNum={100} total={5 + 3 + 14 + 1 + 20} />
        <RateRow starsNum={3} rateNum={14} total={5 + 3 + 14 + 1 + 20} />
        <RateRow starsNum={2} rateNum={2} total={5 + 3 + 14 + 1 + 20} />
        <RateRow starsNum={1} rateNum={0} total={5 + 3 + 14 + 1 + 20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingStart: 16,
    paddingEnd: 30,
    flexDirection: "row",
    paddingBottom: 30,
  },
  left: { paddingEnd: 20 },
  total: { fontSize: 44 },
  totalRate: { fontSize: 14, color: "#9B9B9B" },
  right: { paddingTop: 14, flex: 1 },
});

export default RatingResult;
