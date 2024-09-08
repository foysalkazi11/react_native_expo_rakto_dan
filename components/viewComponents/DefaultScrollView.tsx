import React from "react";
import { ScrollView } from "react-native";
export type DefaultScrollViewProps = ScrollView["props"];
const DefaultScrollView = (props: DefaultScrollViewProps) => {
  return <ScrollView {...props} />;
};

export default DefaultScrollView;
