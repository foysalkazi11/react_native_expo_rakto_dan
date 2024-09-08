import React from "react";
import { useColorScheme } from "react-native";
import { brandTheme } from "../../constants/theme";

const useBrandTheme = () =>{
    const systemColorScheme = useColorScheme();
    const [isDarkMode, setIsDarkMode] = React.useState(systemColorScheme === 'dark');

    // const theme = isDarkMode? brandTheme.dark: brandTheme.light;
    const theme = brandTheme[systemColorScheme ?? "light"]

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

     const typography = {
    
    h1: {
      fontSize: 30,
    fontFamily: theme.fonts.semiBold ,
      color: theme.colors.textPrimary,
        letterSpacing:0,
        lineHeight:45
    },
    h2: {
       fontSize: 24,
    fontFamily: theme.fonts.semiBold,
      color: theme.colors.textPrimary,
        letterSpacing:0,
        lineHeight:36
    },

    h3: {
       fontSize: 22,
    fontFamily: theme.fonts.medium,
      color: theme.colors.textPrimary,
        letterSpacing:0,
        lineHeight:36
    },
    h4: {
       fontSize: 16,
    fontFamily: theme.fonts.medium,
      color: theme.colors.textPrimary,
        letterSpacing:0,
        lineHeight:24
    },
    subHeading1: {
       fontSize: 18,
    fontFamily: theme.fonts.regular,
      color: theme.colors.textSecondary,
        letterSpacing:0,
        lineHeight:27
    },

    subHeading2: {
      fontSize: 14,
    fontFamily: theme.fonts.regular,
      color: theme.colors.textSecondary,
        letterSpacing:0,
        lineHeight:21
    },
    paragraph: {
       fontSize: 14,
    fontFamily: theme.fonts.regular ,
      color: theme.colors.textPrimary,
        letterSpacing:0,
        lineHeight:21
    },

    label: {
       fontSize: 16,
    fontFamily: theme.fonts.medium,
      color: theme.colors.textPrimary,
        letterSpacing:0,
        lineHeight:24
    },
    // ... define other heading and text styles
  };

    return { theme:{...theme,typography} , toggleTheme };
}

export default useBrandTheme;