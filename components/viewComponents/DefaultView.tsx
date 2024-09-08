import useBrandTheme from "@/hooks/uitlity/useBrandTheme";
import React from "react";
import { View } from "react-native";

export type DefaultViewProps = View["props"];
const DefaultView = (props: DefaultViewProps) => {
  
  return <View  {...props} />
};

export default DefaultView;
