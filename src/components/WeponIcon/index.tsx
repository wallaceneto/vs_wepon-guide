import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';

import useStyles from './styles';
import { IWeaponIconProps } from './types';
import { baseSprites } from '../../../global/requires';
import { IBaseSpriteKeys } from '../../../global/types';

const WeponIcon: React.FC<IWeaponIconProps> = ({ weapon, onPress, disable }: IWeaponIconProps) => {
  const style = useStyles();

  const weaponSprit = baseSprites[weapon.sprit as IBaseSpriteKeys]

  return (
    disable ? 
      <View style={style.container}>
        <Image 
          style={style.image} 
          source={weaponSprit}
        />
      </View>
    :
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress ? () => onPress(weapon) : () => {}}
      >
        <View style={style.container}>
          <Image 
            style={style.image} 
            source={weaponSprit}
          />
        </View>
      </TouchableOpacity>
  );
}

export default WeponIcon;