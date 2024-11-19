import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import wepom from './assets/evolutions/base/Sprite-Valkyrie_Turner.webp';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 52,
    height: 52,
  },
});
