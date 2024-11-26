import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import BottomSheet from '@devvie/bottom-sheet';

import useStyles from './styles';
import { IBottomsheetProps } from './types';
import { Image } from 'expo-image';
import TextComponent from '../TextComponent';

const Bottomsheet: React.FC<IBottomsheetProps> = ({ bottomsheetRef }) => {
  const style = useStyles();

  return (
    <BottomSheet ref={bottomsheetRef} style={style.background}>
      <View style={style.content}>
        
        <TextComponent
          text='Language'
          bold
          size={20}
          styles={style.title}
        />
        <View>
          <TouchableOpacity
            style={style.langOption}
            activeOpacity={0.7}
            onPress={() => {}}
          >
            <Image 
              style={style.langImage} 
              source={require('../../../assets/general/brazil-.png')} 
            />

            <TextComponent text='Portuguese' />
          </TouchableOpacity>
          
          <TouchableOpacity
            style={style.langOption}
            activeOpacity={0.7}
            onPress={() => {}}
          >
            <Image 
              style={style.langImage} 
              source={require('../../../assets/general/united-kingdom.png')} 
            />

            <TextComponent text='English' />
          </TouchableOpacity>
        </View>

        <View>
          <TextComponent
            text='About'
            bold
            size={20}
            styles={style.title}
          />

          <View style={style.aboutInfo}>
            <TextComponent
              text='License info'
              size={12}
              styles={style.text}
            />

            <TextComponent
              text='Icon info'
              size={12}
              styles={style.text}
            />
          </View>
        </View>

        <TextComponent
          text='Version'
          size={12}
          styles={style.version}
        />
        
      </View>
    </BottomSheet>
  );
}

export default Bottomsheet;