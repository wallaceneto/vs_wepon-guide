import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';

import useStyles from './styles';
import { IWeponIconProps } from './types';
import { baseSprites } from '../../../global/requires';
import { IBaseSpriteKeys } from '../../../global/types';

const WeponIcon: React.FC<IWeponIconProps> = ({image}: IWeponIconProps) => {
  const style = useStyles();

  const weponSprit = baseSprites[image as IBaseSpriteKeys]

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {}}
    >
      <View style={style.container}>
        <Image 
          style={style.image} 
          source={weponSprit}
        />
      </View>
    </TouchableOpacity>
  );
}

export default WeponIcon;