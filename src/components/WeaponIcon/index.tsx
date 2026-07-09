import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';

import useStyles from './styles';
import { IWeaponIconProps } from './types';
import { baseSprites } from '../../../global/requires';
import { IBaseSpriteKeys, ICastlevaniaSpriteKeys, IEvolutionSpriteKeys } from '../../../global/types';
import { evolutionSprites } from '../../../global/requires';
import { castlevaniaSprites } from '../../../global/requires';

const WeaponIcon: React.FC<IWeaponIconProps> = ({
  weapon,
  type,
  onPress,
  disable,
}: IWeaponIconProps) => {
  const style = useStyles();

  const sprite =
    type === 'evolution' ? evolutionSprites[weapon.evolution.sprite as IEvolutionSpriteKeys]
      : type === 'castlevania' ? castlevaniaSprites[weapon.sprite as ICastlevaniaSpriteKeys]
        : baseSprites[weapon.sprite as IBaseSpriteKeys];

  return (
    <TouchableOpacity
      disabled={disable}
      activeOpacity={0.7}
      onPress={onPress ? () => onPress(weapon, type) : undefined}
      style={style.container}
    >
      <Image
        style={style.image}
        source={sprite}
      />
    </TouchableOpacity>
  );
}

export default WeaponIcon;