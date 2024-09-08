
import useBrandTheme from "@/hooks/uitlity/useBrandTheme";
import { Link } from "expo-router";
import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

type TextButtonProps = PressableProps & {
  label: string;
  isLink?: boolean;
  size?: "sm" | "md";
  variant?: "primary";
} & {
  isLink?: true;
  href?: any;
};

const TextButton = (props: TextButtonProps) => {
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
  props: Omit<TextButtonProps, "isLink" | "href"> & { style?: any }
) => {
  const {
    label,
    size = "sm",
    style = {},
    variant = "primary",
    ...rest
  } = props;
  const { theme } = useBrandTheme();

  const styles = StyleSheet.create({
    primary: { color: theme.colors.primary },
    sm: { fontSize: 12 },
    md: { fontSize: 14 },
  });

  return (
    <Pressable {...rest}>
      <Text
        style={[theme.typography.label, styles[size], styles[variant], style]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default TextButton;
