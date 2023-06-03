import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CustomeIcon from "../common/CustomeIcon";
import CustomeText from "../common/CustomeText";

interface RateRow {
  starsNum: number;
  rateNum: number;
  total: number;
}

const RateRow = ({ starsNum = 0, rateNum = 0, total = 0 }) => {
  const { width } = useWindowDimensions();
  const progressHeight = (40 * width) / 100;

  return (
    <View style={styles.container}>
      <View style={styles.stars}>
        {Array.apply(null, Array(starsNum)).map((s, i) => (
          <CustomeIcon
            Tag={AntDesign}
            name="star"
            color="#FFBA49"
            size={14}
            key={i}
            style={{ paddingHorizontal: 1 }}
          />
        ))}
      </View>
      <View style={[styles.progressCon]}>
        <View
          style={[
            styles.progress,
            {
              backgroundColor: "#DB3022",
              width:
                rateNum === 0
                  ? 0
                  : (100 * rateNum + progressHeight) / (total + progressHeight),
            },
          ]}
        ></View>
      </View>
      <CustomeText style={styles.num}>{rateNum}</CustomeText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 6,
    flexWrap: "wrap",
  },
  stars: {
    // flex: 0.4,

    width: "30%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  progressCon: {
    width: "50%",
    backgroundColor: "#ddd",
    borderRadius: 100,
  },
  progress: {
    maxWidth: "100%",
    height: 8,
    borderRadius: 100,
  },
  num: { fontSize: 14, color: "#9B9B9B", width: "10%", textAlign: "center" },
});
export default RateRow;
