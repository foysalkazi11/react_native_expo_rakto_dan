
import useBrandTheme from "@/hooks/uitlity/useBrandTheme";
import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
type IconButtonProps = PressableProps & {
  icon: React.ReactNode;
  size?: "lg" | "md" | "sm";
  variant?: "border" | "contain" | "disable" | "gray" ;
  style?: any;
};
const IconButton = (props: IconButtonProps) => {
  const { icon, size = "lg", variant = "contain", style, ...rest } = props;
  const { theme } = useBrandTheme();
  const styles = StyleSheet.create({
    baseStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
    },
    contain: {
      backgroundColor: theme.colors.primary,
    },
    border: {
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    disable: {
      // borderWidth: 1,
      backgroundColor: theme.colors.surface,
    },
    gray: {
      // borderWidth: 1,
      backgroundColor: theme.colors.gray,
    },
    lg: {
      width: 38,
      height: 38,
    },
    md: {
     width: 34,
      height: 34,
    },
    sm: {
      width: 24,
      height: 24,
    },
  });
  return (
    <Pressable
      style={[styles.baseStyle, styles[size], styles[variant], style]}
      {...rest}
    >
      {icon}
    </Pressable>
  );
};

export default IconButton;
