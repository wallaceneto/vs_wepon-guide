import { StatusBar, SafeAreaView } from 'react-native';
import './languages/i18n';

import Home from './src/screens/Home';
import { ThemeProvider } from './src/context';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content"  />
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
}
