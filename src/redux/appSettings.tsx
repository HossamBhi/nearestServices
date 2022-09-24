import { createSlice } from "@reduxjs/toolkit";
import { _getAppThemes } from "../utils/appDB";

const initialState = {
  activeTheme: _getAppThemes()[0],
};

const appSettings = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    changeThemeAction: (state, { payload }) => {
      state.activeTheme = payload;
    },
  },
});

export const { changeThemeAction } = appSettings.actions;
export default appSettings.reducer;
