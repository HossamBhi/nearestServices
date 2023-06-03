import React, { useState } from "react";
import { View } from "react-native";
import PageHeader from "./pageHeader/PageHeader";

interface PageContainerProps {
  children?: JSX.Element;
  viewType?: number;
  setViewType?: (x: any) => void;
  title?: string;
}

export default ({
  children,
  viewType,
  setViewType,
  title,
}: PageContainerProps) => {
  return (
    <View style={{ flex: 1 }}>
      <PageHeader viewType={viewType} setViewType={setViewType} />
      {children}
    </View>
  );
};
