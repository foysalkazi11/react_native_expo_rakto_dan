// app/home/index.tsx
import useBrandTheme from '@/hooks/uitlity/useBrandTheme';
import { Stack } from 'expo-router';

export default function HomeLayout() {
  const { theme } = useBrandTheme()

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.textOnPrimary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
      <Stack.Screen 
        name="details/[userId]" 
        options={{ 
          title: 'Details',
          headerShown: false // Show header for details screen
        }} 
      />
      {/* <Stack.Screen name="requestForDonate" options={{ title: 'Request For Donate',headerShown:false }} />
      <Stack.Screen name="forgetPasswordOtpVerification" options={{ title: 'OTP Verification',headerShown:false }} /> */}
    </Stack>
  )
}
