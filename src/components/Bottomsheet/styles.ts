import {StyleSheet} from 'react-native';
import { useContext, version } from 'react';

import { ThemeContext } from '../../context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    background: {
      backgroundColor: colors.modalColor
    },
    content: {
      justifyContent: 'space-around',
      paddingHorizontal: 24,
    },
    title: {
      color: colors.textColor,
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 8,
    },
    langText: {
      color: colors.textColor,
      fontSize: 16,
    },
    language: {},
    langOption: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 24,
      marginBottom: 8,
    },
    langImage: {
      height: 16,
      width: 16,
      marginRight: 8,
    },
    text: {
      color: colors.textColor,
      fontSize: 12,
      marginBottom: 8,
    },
    about: {},
    aboutInfo: {
      paddingHorizontal: 16,
    },
    version: {
      marginTop: 32,
      color: colors.textColor,
      fontSize: 12,
      textAlign: 'center',
    },
  });
};

export default useStyles;