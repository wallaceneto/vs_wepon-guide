import { useRef, useState } from 'react';
import { View, FlatList } from 'react-native';
import { BottomSheetMethods } from '@devvie/bottom-sheet';

import useStyles from './styles';
import Header from '../../components/Header';
import WeponIcon from '../../components/WeponIcon';
import Bottomsheet from '../../components/Bottomsheet';
import TextComponent from '../../components/TextComponent';
import ItemModal from '../../components/ItemModal';

import weapons from '../../../global/mocks/base_weapons';

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
        <TextComponent
          text='Base wepons'
          bold
          styles={style.text}
        />

        <FlatList
          data={weapons}
          keyExtractor={item => item.id}
          numColumns={5}
          renderItem={
            ({item}) => 
            <WeponIcon weapon={item} setModalVisible={setModalVisible} /> 
          }
        />
      </View>

      <Bottomsheet bottomsheetRef={bottomsheetRef} />
    </View>
  );
}
