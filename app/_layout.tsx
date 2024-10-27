import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState, useCallback } from 'react';
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
import { StyleSheet, View, Text } from 'react-native';
import useBrandTheme from '@/hooks/uitlity/useBrandTheme';
import { Slot } from 'expo-router';
import AuthProvider from '@/contexts/AuthProvider';
import DefaultImage from '@/components/image/DefaultImage.component';
import DefaultView from '@/components/viewComponents/DefaultView';

SplashScreen.preventAutoHideAsync(); // Prevent splash screen from hiding until app is ready

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useBrandTheme();
  
  // Track if the app is ready
  const [isAppReady, setIsAppReady] = useState(false);

  // Load fonts
  const [fontsLoaded, fontsError] = useFonts({
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

  // Check if the app is ready (fonts are loaded or there's an error)
  const onAppReady = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync(); // Hide splash screen once app is ready
      setIsAppReady(true); // Set app as ready
    }
  }, [fontsLoaded, fontsError]);

  useEffect(() => {
    onAppReady(); // Call the function to check when the app is ready
  }, [onAppReady]);

  // Show splash screen while the app is loading
  if (!isAppReady) {
    return null;
       // You can return a custom loading screen here if needed
    
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

  // App content once it's ready
  return (
    <AuthProvider>
      {/* <StatusBar translucent /> */}
      <Slot />
    </AuthProvider>
  );
}


// return <DefaultView style={{flex:1,width:"100%",height:"100%",backgroundColor:theme.colors.primary}}>
//       <DefaultImage style={{flex:1,width:"100%",height:"100%",backgroundColor:theme.colors.primary}} source={require('../assets/images/splash.png')} />
//     </DefaultView>;