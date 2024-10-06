import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
     
      <Link href="/auth/forgetPassword">Forget Password</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});