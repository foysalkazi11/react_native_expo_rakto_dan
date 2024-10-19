// app/home/index.tsx
import { Stack } from 'expo-router';

export default function HomeLayout() {

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
        <Stack.Screen  name="index" options={{ title: 'Home',headerShown:false}} />
        {/* <Stack.Screen name="details" options={{ title: 'Details',headerShown:false }} />
        <Stack.Screen name="requestForDonate" options={{ title: 'Request For Donate',headerShown:false }} /> */}
        {/* <Stack.Screen name="forgetPasswordOtpVerification" options={{ title: 'OTP Verification',headerShown:false }} /> */}
      </Stack>

 
 
  
  );
}
