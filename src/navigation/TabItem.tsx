import React, { useEffect, useRef } from "react";
import { Pressable, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { useTheme } from "react-native-paper";
import CustomeIcon from "../components/common/CustomeIcon";
// colors
export const c_inverted = "#002ff6";
export const c_inverted_lite = "#002ff699";

export default function TabItem(props: any) {
  const tabRef = useRef<any>(null);
  const { colors }: any = useTheme();
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;

  useEffect(() => {
    if (focused) {
      tabRef.current?.animate({
        // 0: { scale: 0, rotate: "0deg" },
        // 1: { scale: 1.5, rotate: "360deg" },
        0: { scale: 0, rotate: "0deg" },
        1: { scale: 1.5, rotate: "360deg" },
      });
    } else {
      tabRef.current?.animate({
        0: { scale: 1.5 },
        1: { scale: 0.9},
        // 0: { scale: 1.5, rotate: "360deg" },
        // 1: { scale: 1, rotate: "0deg" },
      });
    }
  }, [focused]);

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Animatable.View ref={tabRef} duration={1000} style={styles.container}>
        <CustomeIcon
          Tag={focused ? item.typeActive : item.typeInActive}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? colors.primary : colors.light}
        />
      </Animatable.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
