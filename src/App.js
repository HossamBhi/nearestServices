import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme, StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { DarkTheme, DefaultTheme } from "./utils/schema";
import MainStack from "./navigation";
import { useSelector } from "react-redux";
export default function App() {
  const { activeTheme } = useSelector(state => state.appSettings);
  const scheme = useColorScheme();
  const isDark =
    activeTheme.value === 1
      ? scheme === "dark"
      : activeTheme.value === 2
      ? true
      : false;

  return (
    <PaperProvider theme={isDark ? DarkTheme : DefaultTheme}>
      <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
        <MainStack />
        <StatusBar
          barStyle={isDark ? "light-content" : "dark-content"}
          backgroundColor={isDark ? "#000000" : "#ffffff"}
        />
      </NavigationContainer>
    </PaperProvider>
  );
}
