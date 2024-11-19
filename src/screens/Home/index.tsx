import { View } from 'react-native';

import useStyles from './styles';
import Header from '../../components/Header';

export default function Home() {
  const style = useStyles();

  return (
    <View style={style.container}>
      <Header />
    </View>
  );
}

