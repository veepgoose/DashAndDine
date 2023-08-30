import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './Screens/Homepage/Homepage';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Welcome to Dash 'N' Dine! </Text> */}
      <StatusBar style="auto" />
      <Homepage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D5E60',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
