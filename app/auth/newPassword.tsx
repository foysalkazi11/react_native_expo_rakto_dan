import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function NewPassword() {
  return (
    <View style={styles.container}>
      <Text>NewPassword</Text>
      <Link href="/auth">Back</Link>
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