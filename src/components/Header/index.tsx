import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Image, ImageBackground } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';

const Header: React.FC = () => {
  const {t} = useTranslation();
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
        <Text style={style.title}>
          {t('Evolution Guide')}
        </Text>

        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <Ionicons name="settings-sharp" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;