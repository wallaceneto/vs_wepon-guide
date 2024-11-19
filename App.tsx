import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

import item from './assets/passive-items/Sprite-Skull_OManiac.webp';
import wepom from './assets/castlevania/Sprite-Iron_Shield.webp';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Evolution guide</Text>
      <Image
        style={styles.image}
        source={wepom}
        contentFit="fill"
      />
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
