import React, { useState } from "react";
import { View } from "react-native";
import SearchHeader from "./pageHeader/SearchHeader";

export default ({ children, viewType, setViewType }) => {
  return (
    <View style={{ flex: 1 }}>
      <SearchHeader viewType={viewType} setViewType={setViewType} />
      {children}
    </View>
  );
};
