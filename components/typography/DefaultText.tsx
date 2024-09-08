
import useBrandTheme from "@/hooks/uitlity/useBrandTheme";
import React from "react";
import { Text } from "react-native";

type TextProps = Text["props"] & {
  type?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "paragraph"
    | "label"
    | "subHeading1" 
    | "subHeading2"
};

const DefaultText = (props: TextProps) => {
  const { theme } = useBrandTheme();
  const { type = "paragraph", style, ...otherProps } = props;
  return (
    <Text style={[theme.typography[type], style]} {...otherProps} />
  );
};

export default DefaultText;
