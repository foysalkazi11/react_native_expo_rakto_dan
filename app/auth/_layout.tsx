// app/auth/index.tsx
import { Stack } from 'expo-router';
import { View } from 'react-native';
import useBrandTheme from '@/hooks/uitlity/useBrandTheme';

export default function AuthLayout() {
  const { theme } = useBrandTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
             <Stack
        
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.surface,
          },
          headerTintColor: theme.colors.textPrimary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen  name="index" options={{ title: 'Sign In' }} />
        <Stack.Screen name="forgetPassword" options={{ title: 'Forget Password' }} />
        <Stack.Screen name="newPassword" options={{ title: 'New Password' }} />
      </Stack>

    </View>
 
  
  );
}
