import { useRef, useState } from 'react';
import { View } from 'react-native';
import { BottomSheetMethods } from '@devvie/bottom-sheet';

import useStyles from './styles';
import Header from '../../components/Header';
import Bottomsheet from '../../components/Bottomsheet';
import ItemModal from '../../components/ItemModal';
import WeaponSection from '../../components/WeaponSection';

import { IWeapon } from '../../../global/types';
import weapons from '../../../global/mocks/base_weapons';
import castlevania from '../../../global/mocks/castlevenia_weapons';

export default function Home() {
  const style = useStyles();

  const bottomsheetRef = useRef<BottomSheetMethods>(null);
  const handleOpenOptions = () => bottomsheetRef.current?.open();

  const [currentWeapon, setCurrentWeapon] = useState(weapons[0]);
  const [currentType, setCurrentType] = useState('base');
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = (weapon: IWeapon, type: string) => {
    setCurrentWeapon(weapon);
    setCurrentType(type);
    setModalVisible(true);
  }

  return (
    <View style={style.container}>
      <ItemModal 
        type={currentType} 
        weapon={currentWeapon} 
        visible={modalVisible} 
        setVisible={setModalVisible}
      />

      <Header handleOpen={handleOpenOptions} />

      <WeaponSection
        title='Base weapons'
        data={weapons}
        type='base'
        handleOpenModal={handleOpenModal} 
      />

      <WeaponSection
        title='Ode to castlevania'
        data={castlevania}
        type='castlevania'
        handleOpenModal={handleOpenModal} 
      />

      <Bottomsheet bottomsheetRef={bottomsheetRef} />
    </View>
  );
}
