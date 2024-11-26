import { useRef, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { BottomSheetMethods } from '@devvie/bottom-sheet';

import useStyles from './styles';
import Header from '../../components/Header';
import WeponIcon from '../../components/WeponIcon';
import Bottomsheet from '../../components/Bottomsheet';
import TextComponent from '../../components/TextComponent';
import ItemModal from '../../components/ItemModal';

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
  const style = useStyles();

  const bottomsheetRef = useRef<BottomSheetMethods>(null);
  const handleOpenOptions = () => bottomsheetRef.current?.open();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={style.container}>
      <ItemModal visible={modalVisible} setVisible={setModalVisible} />

      <Header handleOpen={handleOpenOptions} />

      <View style={style.section}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <TextComponent
            text='Base wepons'
            bold
            styles={style.text}
          />
        </TouchableOpacity>

        <FlatList
          data={mock}
          keyExtractor={item => item.id}
          numColumns={5}
          renderItem={({item}) => <WeponIcon image={item.name} />}
        />
      </View>

      <View style={style.section}>
        <TextComponent
            text='Ode to Castlevania'
            bold
            styles={style.text}
          />

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

