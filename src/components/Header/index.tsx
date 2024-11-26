import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Image, ImageBackground } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import { IHeaderProps } from './types';
import TextComponent from '../TextComponent';

const Header: React.FC<IHeaderProps> = ({ handleOpen }) => {
  const style = useStyles();

  return (
    <View>
      <View>
        <ImageBackground
          style={style.banner}
          source={require('../../../assets/general/banner.png')}
          contentFit='cover'
        >
          <Image
            style={style.logo}
            source={require('../../../assets/general/game-logo.png')}
            contentFit='contain'
          />
        </ImageBackground>
      </View>

      <View style={style.divider} />

      <View style={style.content}>
        <TextComponent 
          text='Evolution Guide' 
          size={20} 
          bold
        />

        <TouchableOpacity activeOpacity={0.7} onPress={handleOpen}>
          <Ionicons name="settings-sharp" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;