import { StatusBar, SafeAreaView } from 'react-native';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import './languages/i18n';

import Home from './src/screens/Home';
import { ThemeProvider } from './src/context';

export default function App() {

  const loadLanguage = async () => {
    try {
      const storedLanguage = await AsyncStorage.getItem('app-language');
      if (storedLanguage) {
        i18next.changeLanguage(storedLanguage);
      }
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {loadLanguage()}, []);

  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content"  />
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
}
