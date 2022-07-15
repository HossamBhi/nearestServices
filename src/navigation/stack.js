import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Places } from "../pages/Places";
import { Categories } from "../pages/Categories";
import Settings from "../pages/Settings";
import SettingsSelectOption from "../pages/SettingsSelectOption";
const Stack = createStackNavigator();

export const MainStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    // initialRouteName="Settings"
    initialRouteName="Categories"
  >
    <Stack.Group>
      <Stack.Screen name="Places" component={Places} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Group>

    <Stack.Group screenOptions={{ presentation: "modal" }}>
      <Stack.Screen
        name="SettingsSelectOption"
        component={SettingsSelectOption}
      />
    </Stack.Group>
  </Stack.Navigator>
);
