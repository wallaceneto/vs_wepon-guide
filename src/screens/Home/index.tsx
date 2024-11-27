import { useRef, useState } from 'react';
import { View } from 'react-native';
import { BottomSheetMethods } from '@devvie/bottom-sheet';

import useStyles from './styles';
import Header from '../../components/Header';
import Bottomsheet from '../../components/Bottomsheet';
import ItemModal from '../../components/ItemModal';

import weapons from '../../../global/mocks/base_weapons';
import { IWeapon } from '../../../global/types';
import WeaponSection from '../../components/WeaponSection';

export default function Home() {
  const style = useStyles();

  const bottomsheetRef = useRef<BottomSheetMethods>(null);
  const handleOpenOptions = () => bottomsheetRef.current?.open();

  const [currentWeapon, setCurrentWeapon] = useState(weapons[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = (weapon: IWeapon) => {
    setCurrentWeapon(weapon);
    setModalVisible(true);
  }

  return (
    <View style={style.container}>
      <ItemModal weapon={currentWeapon} visible={modalVisible} setVisible={setModalVisible} />

      <Header handleOpen={handleOpenOptions} />

      <WeaponSection
        title='Base weapons'
        data={weapons}
        handleOpenModal={handleOpenModal} 
      />

      <WeaponSection
        title='Ode to castlevania'
        data={weapons}
        handleOpenModal={handleOpenModal} 
      />

      <Bottomsheet bottomsheetRef={bottomsheetRef} />
    </View>
  );
}
