import useBrandTheme from "@/hooks/uitlity/useBrandTheme";
import React, { forwardRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";

type DefaultInputType = TextInput["props"] & {
  variant?: "border" | "contain" | "disable";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const DefaultInput = forwardRef<TextInput, DefaultInputType>((props, ref) => {
  const {
    style,
    variant = "contain",
    leftIcon,
    rightIcon,
    ...rest
  } = props;
  const { theme } = useBrandTheme();

  const styles = StyleSheet.create({
    DefaultInputContainer: {
      width: "100%",
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      backgroundColor: theme.colors.surface,
      borderRadius: 8,
      gap: 10,
      paddingHorizontal: 10,
    },
    baseInputStyle: {
      width: "100%",
      height: 34,
      color: theme.colors.textSecondary,
      fontSize: 16,
      flex: 1,
      fontFamily: theme.fonts.regular,
    },
    border: {
      borderColor: theme.colors.gray,
      borderWidth: 1,
    },
    contain: {
      backgroundColor: theme.colors.surface,
      borderRadius: 8,
    },
    disable: {
      backgroundColor: theme.colors.gray,
      borderRadius: 8,
    },
  });

  return (
    <View style={[styles.DefaultInputContainer, styles[variant], style]}>
      {leftIcon && leftIcon}
      <TextInput
        ref={ref}  // Pass the ref here
        {...rest}
        style={[styles.baseInputStyle]}
        placeholderTextColor={theme.colors.textSecondary}
      />
      {rightIcon && rightIcon}
    </View>
  );
});

export default DefaultInput;
