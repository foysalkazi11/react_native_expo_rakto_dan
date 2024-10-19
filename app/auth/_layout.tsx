// app/auth/index.tsx
import { Stack } from 'expo-router';
import { View } from 'react-native';
import useBrandTheme from '@/hooks/uitlity/useBrandTheme';

export default function AuthLayout() {
  const { theme } = useBrandTheme();

  return (

        <Stack
        
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: theme.colors.primary,
        //   },
        //   headerTintColor: theme.colors.textOnPrimary,
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
            
        //   },
          
        // }}
      >
        <Stack.Screen  name="index" options={{ title: 'Sign In',headerShown:false }} />
        <Stack.Screen name="forgetPassword" options={{ title: 'Forget Password',headerShown:false }} />
        <Stack.Screen name="newPassword" options={{ title: 'New Password',headerShown:false }} />
        <Stack.Screen name="forgetPasswordOtpVerification" options={{ title: 'OTP Verification',headerShown:false }} />
      </Stack>

 
 
  
  );
}
