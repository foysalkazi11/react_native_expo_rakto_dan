
import useBrandTheme from "@/hooks/uitlity/useBrandTheme";
import { Link } from "expo-router";
import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

type DefaultButtonProps = PressableProps & {
  label: React.ReactNode;
  isLink?: boolean;
  size?: "lg" | "md" | "sm";
  variant?:  "primary"|"secondary" | "light"
} & {
  isLink?: true;
  href?: any;
};

const DefaultButton = (props: DefaultButtonProps) => {
  const { label, isLink, href, ...rest } = props;

  if (isLink) {
    // If it's a link, use a different handling
    // You can handle the link behavior here
    return (
      <Link href={href} asChild>
        <Button label={label} {...rest} />
      </Link>
    );
  }
  return <Button label={label} {...rest} />;
};

const Button = (
  props: Omit<DefaultButtonProps, "isLink" | "href"> & { style?: any }
) => {
  const {
    label,
    style = {},
    size = "lg",
    variant = "primary" ,
    ...rest
  } = props;
  const { theme } = useBrandTheme();

  const styles = StyleSheet.create({
    btnBox: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100,
      height: 46,
    },
    lg: { maxWidth: 295 },
    md: { maxWidth: 250 },
    sm: { maxWidth: 200 },
    primary: { backgroundColor: theme.colors.primary },
    secondary: { backgroundColor: theme.colors.secondary },
    light: { backgroundColor: theme.colors.primaryLight },
    label: { fontSize: 16, color: theme.colors.textOnPrimary,fontFamily:theme.fonts.semiBold },
  });

  return (
    <Pressable
      {...rest}
      style={[styles.btnBox,  styles[variant], style]}
    >
      {typeof label === "string" ?<Text style={styles.label}>{label}</Text> : label }
      
    </Pressable>
  );
};

export default DefaultButton;
