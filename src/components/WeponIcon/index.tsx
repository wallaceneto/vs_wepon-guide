import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';

import useStyles from './styles';
import { IWeaponIconProps } from './types';
import { baseSprites } from '../../../global/requires';
import { IBaseSpriteKeys, IEvolutionSpriteKeys } from '../../../global/types';
import { evolutionSprites } from '../../../global/requires/evolution-weapons-sprites';

const WeponIcon: React.FC<IWeaponIconProps> = ({ 
  weapon, 
  onPress, 
  disable,
  evolution
}: IWeaponIconProps) => {
  const style = useStyles();

  const weaponSprite = baseSprites[weapon.sprite as IBaseSpriteKeys]
  const evolutionSprite = evolutionSprites[weapon.evolution.sprite as IEvolutionSpriteKeys]

  const spriteIcon = () => {
    return (
      <Image 
        style={style.image} 
        source={evolution ? evolutionSprite : weaponSprite}
      />
    );
  }

  return (
    disable ? 
      <View style={style.container}>
        {spriteIcon()}
      </View>
    :
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress ? () => onPress(weapon) : () => {}}
        style={style.container}
      >
        {spriteIcon()}
      </TouchableOpacity>
  );
}

export default WeponIcon;