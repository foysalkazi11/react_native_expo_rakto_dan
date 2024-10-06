import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function ForgetPassword() {
  return (
    <View style={styles.container}>
      <Text>ForgetPassword</Text>
       <Link href="/auth">Back</Link>
      <Link href="/auth/newPassword">New Password</Link>
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