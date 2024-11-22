import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import BottomSheet from '@devvie/bottom-sheet';

import useStyles from './styles';
import { IBottomsheetProps } from './types';
import { Image } from 'expo-image';

const Bottomsheet: React.FC<IBottomsheetProps> = ({ bottomsheetRef }) => {
  const {t} = useTranslation();
  const styles = useStyles();

  return (
    <BottomSheet ref={bottomsheetRef} style={styles.background}>
      <View style={styles.content}>
        
        <Text style={styles.title}>{t('Language')}</Text>
        <View style={styles.language}>
          <TouchableOpacity
            style={styles.langOption}
            activeOpacity={0.7}
            onPress={() => {}}
          >
            <Image 
              style={styles.langImage} 
              source={require('../../../assets/general/brazil-.png')} 
            />

            <Text style={styles.langText}>{t('Portuguese')}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.langOption}
            activeOpacity={0.7}
            onPress={() => {}}
          >
            <Image 
              style={styles.langImage} 
              source={require('../../../assets/general/united-kingdom.png')} 
            />

            <Text style={styles.langText}>{t('English')}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.about}>
          <Text style={styles.title}>{t('About')}</Text>

          <View style={styles.aboutInfo}>
            <Text style={styles.text}>{t('License info')}</Text>

            <Text style={styles.text}>{t('Icon info')}</Text>
          </View>
        </View>

        <Text style={styles.version}>{t('Version', {version: '0.1.0'})}</Text>
        
      </View>
    </BottomSheet>
  );
}

export default Bottomsheet;