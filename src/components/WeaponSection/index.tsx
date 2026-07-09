import { View, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import WeaponIcon from '../WeaponIcon';
import TextComponent from '../TextComponent';
import { IWeaponSectionProps } from './types/IWeaponSectionProps';
import { useState } from 'react';

const WeaponSection: React.FC<IWeaponSectionProps> = ({ handleOpenModal, title, data, type }: IWeaponSectionProps) => {
  const style = useStyles();

  const [opened, setOpened] = useState(true);

  return (
    <View style={style.section}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={style.sectionLabel}
        onPress={() => setOpened(!opened)}
      >
        <Ionicons 
          name={opened ? "caret-down" : "caret-forward"}
          size={24}
          style={style.icon}
        />
        
        <TextComponent
          bold
          text={title}
          styles={style.text}
        />
      </TouchableOpacity>

      {
        opened ?
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            numColumns={5}
            renderItem={
              ({item}) => 
              <WeaponIcon type={type} weapon={item} onPress={handleOpenModal} /> 
            }
          />
        : null
      }
    </View>
  );
}

export default WeaponSection;
