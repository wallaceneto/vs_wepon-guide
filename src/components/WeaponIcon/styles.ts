import {StyleSheet} from 'react-native';
import { useContext } from 'react';

import { ThemeContext } from '../../context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      backgroundColor: colors.cardBorderColor,
      borderRadius: 8,
      height: 64,
      width: 64,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 6,
      marginVertical: 8,
    },
    image: {
      backgroundColor: colors.cardBgColor,
      borderRadius: 8,
      height: 57,
      width: 57,
    },
  });
};

export default useStyles;