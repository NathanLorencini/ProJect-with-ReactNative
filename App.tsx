import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextBold from './src/Text';

export default function App() {
  return (
    <View style={styles.container}>
      <TextBold informText={'TextNathan'}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
