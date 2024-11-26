import {StyleSheet} from 'react-native';
import { useContext } from 'react';

import { ThemeContext } from '../../context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      backgroundColor: colors.cardBorderColor,
      borderRadius: 8,
      height: 60,
      width: 60,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 6,
      marginVertical: 8,
    },
    image: {
      backgroundColor: colors.cardBgColor,
      borderRadius: 8,
      height: 53,
      width: 53,
    },
  });
};

export default useStyles;