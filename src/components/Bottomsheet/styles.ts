import {StyleSheet} from 'react-native';
import { useContext } from 'react';

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
      marginBottom: 8,
    },
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
      marginBottom: 8,
    },
    aboutInfo: {
      paddingHorizontal: 16,
    },
    version: {
      marginTop: 32,
      textAlign: 'center',
    },
  });
};

export default useStyles;