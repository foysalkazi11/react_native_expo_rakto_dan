// Rest of the import statements
 import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import { StyleSheet, View,Text } from "react-native";
import useBrandTheme from '@/hooks/uitlity/useBrandTheme';
import { Slot, Stack,Navigator } from 'expo-router';
import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import AuthLayout from './auth/_layout';

SplashScreen.preventAutoHideAsync();


export default function RootLayout({children}:{children:React.ReactNode}) {
  const {theme,toggleTheme} = useBrandTheme()
  const [loaded, error] = useFonts({
     Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  //   useEffect(() => {
  //   setTimeout(() => {
  //     setStatusBarStyle("light");
  //   }, 0);
  // }, []);

  if (!loaded && !error) {
    return null;
  }

    const styles = StyleSheet.create({
  container: {
     flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
      color: theme.colors.textPrimary, // Using theme for text color
  },
 
});


  return (
 
    < >
      {/* <StatusBar translucent  /> */}
      <Slot />
    </>
    
  )
}
