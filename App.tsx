import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

import wepom from './assets/evolutions/base/Sprite-Valkyrie_Turner.webp';

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
