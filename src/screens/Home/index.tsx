import { View, Text, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import Header from '../../components/Header';
import WeponIcon from '../../components/WeponIcon';

export default function Home() {
  const {t} = useTranslation();
  const style = useStyles();

  const mock = [{
      id: '1',
      name: 'Whip'
    },{
      id: '2',
      name: 'Magic_Wand'
    },{
      id: '3',
      name: 'Knife'
    },{
      id: '4',
      name: 'Magic_Wand'
    },{
      id: '5',
      name: 'Knife'
    },{
      id: '6',
      name: 'Magic_Wand'
    },{
      id: '7',
      name: 'Knife'
    },{
      id: '8',
      name: 'Magic_Wand'
    },{
      id: '9',
      name: 'Knife'
    }];

  return (
    <View style={style.container}>
      <Header />

      <View style={style.section}>
        <Text style={style.text}>
          {t('Base wepons')}
        </Text>

        <FlatList
          data={mock}
          keyExtractor={item => item.id}
          numColumns={5}
          renderItem={({item}) => <WeponIcon image={item.name} />}
        />
      </View>

      <View style={style.section}>
        <Text style={style.text}>
          {t('Ode to Castlevania')}
        </Text>

        <FlatList
          data={mock}
          keyExtractor={item => item.id}
          numColumns={5}
          renderItem={({item}) => <WeponIcon image={item.name} />}
        />
      </View>
    </View>
  );
}

