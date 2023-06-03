import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Places from "../pages/Places";
import Categories from "../pages/Categories";
import Settings from "../pages/Settings";
import SettingsSelectOption from "../pages/SettingsSelectOption";
import AddAddress from "../pages/AddAddress";
import Address from "../pages/Addresses";
import RatingAndReviews from "../pages/RatingAndReviews";
import AddReview from "../pages/AddReview";
import HomePage from "../pages/HomePage";
import Login from "../pages/loginModule/Login";
import Register from "../pages/loginModule/Register";
import ForgetPass from "../pages/loginModule/ForgetPass";
import ChangePassword from "../pages/loginModule/ChangePassword";
import Tabs from "./Tabs";
import Orders from "../pages/Orders";
const Stack = createStackNavigator();

export const MainStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    // initialRouteName="Login"
    initialRouteName="Tabs"
  >
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Orders" component={Orders} />
    {/* start login module */}
    <Stack.Group>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgetPass" component={ForgetPass} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Group>
    {/* end login module */}

    <Stack.Group>
      {/* <Stack.Screen name="HomePage" component={HomePage} /> */}
      {/* <Stack.Screen name="Categories" component={Categories} /> */}
      <Stack.Screen name="Places" component={Places} />
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
