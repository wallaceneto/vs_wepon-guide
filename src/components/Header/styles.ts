import {StyleSheet} from 'react-native';
import { useContext } from 'react';

import { ThemeContext } from '../../context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    banner: {
      height: 120,
      width: '100%',
      opacity: 0.9,
    },
    logo: {
      height: 80,
      width: 180,
      position: 'absolute',
      top: 20,
      left: 14,
    },
    divider: {
      backgroundColor: colors.dividerColor,
      height: 2,
      width: 'auto',
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
    },
  });
};

export default useStyles;