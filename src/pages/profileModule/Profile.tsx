import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Animatable.Text animation="zoomInUp">Profile Page</Animatable.Text>
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
export default Profile;
