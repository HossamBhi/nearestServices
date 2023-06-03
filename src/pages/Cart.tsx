import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

const Cart = () => {
  return (
    <View style={styles.container}>
      <Animatable.Text  style={{fontSize: 40}} animation="zoomInUp">Coming Soon</Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Cart;
