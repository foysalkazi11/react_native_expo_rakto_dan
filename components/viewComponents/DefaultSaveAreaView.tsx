import React from "react";
import { SafeAreaView } from "react-native";
export type DefaultSaveAreaViewProps = SafeAreaView["props"];
const DefaultSaveAreaView = (props: DefaultSaveAreaViewProps) => {
  return <SafeAreaView {...props} />;
};

export default DefaultSaveAreaView;
