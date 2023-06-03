import "react-native-gesture-handler";
import React from "react";
import { registerRootComponent } from "expo";
import { I18nManager } from "react-native";
import App from "./src/App";
import "./src/langs";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
const persistor = persistStore(store);
// For RTL Support
I18nManager.allowRTL(true);
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(() => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
));
