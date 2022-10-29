import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

const primary_color = "#FF9431";
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
    light: "#ffc562",
    dark: "#c66500",
    text: "#000000",
    border: "#206C84",
    error: "#F32013",
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
    light: "#ffc562",
    dark: "#c66500",
    surface: "#0B0F13",
    text: "#ffffff",
    error: "#CA0B00",
  },
};
