import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Places } from "../pages/Places";
import { Categories } from "../pages/Categories";
import Settings from "../pages/Settings";
import SettingsSelectOption from "../pages/SettingsSelectOption";
import AddAddress from "../pages/AddAddress";
import Address from "../pages/Addresses";
import RatingAndReviews from "../pages/RatingAndReviews";
import AddReview from "../pages/AddReview";
const Stack = createStackNavigator();

export const MainStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    // initialRouteName="Categories"
    initialRouteName="RatingAndReviews"
  >
    <Stack.Group>
      <Stack.Screen name="Places" component={Places} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="RatingAndReviews" component={RatingAndReviews} />
    </Stack.Group>

    <Stack.Group screenOptions={{ presentation: "modal" }}>
      <Stack.Screen
        name="SettingsSelectOption"
        component={SettingsSelectOption}
      />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen name="AddReview" component={AddReview} />
    </Stack.Group>
  </Stack.Navigator>
);
