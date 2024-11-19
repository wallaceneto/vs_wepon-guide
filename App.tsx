import { StatusBar, StyleSheet, View } from 'react-native';
import './languages/i18n';

import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content"  />
      <Home />
    </View>
  );
}
