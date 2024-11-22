import { useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { BottomSheetMethods } from '@devvie/bottom-sheet';

import useStyles from './styles';
import Header from '../../components/Header';
import WeponIcon from '../../components/WeponIcon';
import Bottomsheet from '../../components/Bottomsheet';

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

export default function Home() {
  const {t} = useTranslation();
  const style = useStyles();

  const bottomsheetRef = useRef<BottomSheetMethods>(null);
  const handleOpenOptions = () => bottomsheetRef.current?.open();

  return (
    <View style={style.container}>
      <Header handleOpen={handleOpenOptions} />

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

      <Bottomsheet bottomsheetRef={bottomsheetRef} />
    </View>
  );
}

