import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  useColorScheme,
  StatusBar,
  View,
  SafeAreaView,
  StatusBarStyle,
} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { DarkTheme, DefaultTheme } from "./utils/schema";
import MainStack from "./navigation";
import { useSelector } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const MyStatusBar = ({
  backgroundColor,
  barStyle,
}: {
  backgroundColor: any;
  barStyle: StatusBarStyle | null | undefined;
}) => (
  <View style={[{ height: STATUSBAR_HEIGHT }, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent {...{ barStyle, backgroundColor }} />
    </SafeAreaView>
  </View>
);

export default function App() {
  const { activeTheme } = useSelector(
    (state: { appSettings: any }) => state.appSettings
  );
  const scheme = useColorScheme();
  const isDark = !(activeTheme.value === 1
    ? scheme === "dark"
    : activeTheme.value === 2
    ? true
    : false);
  const theme = isDark ? DarkTheme : DefaultTheme;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <MyStatusBar
            backgroundColor={theme.colors.surface}
            barStyle={isDark ? "light-content" : "dark-content"}
          />
          <MainStack />
        </NavigationContainer>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
