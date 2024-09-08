// src/ThemeProvider.js
import React, { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';
import {brandTheme} from '../constants/theme';

type TBrandThemeContext = {
    theme: typeof brandTheme.dark | typeof brandTheme.dark;
  toggleTheme: () => void;
}

const BrandThemeContext = createContext<TBrandThemeContext | null>(null);

// export const useBrandTheme = () => useContext(BrandThemeContext);

 const BrandThemeProvider = ({ children }:{children:React.ReactNode}) => {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');

  const theme = isDarkMode ? brandTheme.dark : brandTheme.light;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BrandThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </BrandThemeContext.Provider>
  );
};

export default BrandThemeProvider;
