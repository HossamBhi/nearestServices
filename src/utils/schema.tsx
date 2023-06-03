import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

const primary_color = "#0a8791";
const light = "#22939A";
const dark = "#065155";
// const primary_color = "#FF9431";
// const light: "#ff674d",
// const dark: "#a10000";

// "#3B8FAA"
export const DefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: "#F9F9F9",
    surface: "#ffffff",
    primary: primary_color,
    light,
    dark,
    text: "#000000",
    border: "#206C84",
    error: "#F32013",
    onDisabled: "#595f68",
  },
};

export const DarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: "#14191F",
    primary: primary_color,
    light,
    dark,
    surface: "#0B0F13",
    text: "#ffffff",
    error: "#CA0B00",
    onDisabled: "#bcc3cd",
  },
};
