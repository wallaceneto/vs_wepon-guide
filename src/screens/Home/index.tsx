import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

import data from '../../../global/mocks/base_wepons.json';
import { IBaseSpriteKeys, IPassiveSpriteKeys } from '../../../global/types';
import { baseSprites, passiveSprites } from '../../../global/requires';

export default function Home() {
  const wepons = data;

  return (
    <View style={styles.container}>
      <FlatList
        data={wepons}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
            const weponSprit = baseSprites[item.sprit as IBaseSpriteKeys];
            const requiredSprit = passiveSprites[item.evolution.require_sprit as IPassiveSpriteKeys];

            return(
              <View style={styles.card}>
                <Text>{item.name}</Text>
                <Image
                  style={styles.image} 
                  source={weponSprit} 
                />
                <Text>Required: {item.evolution.require_text}</Text>
                <Image
                  style={styles.image} 
                  source={requiredSprit} 
                />
              </View>
            );
          }
        }
      />
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
  card: {
    marginTop: 48,
  },
});
