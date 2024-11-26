import {StyleSheet} from 'react-native';
import { useContext } from 'react';

import { ThemeContext } from '../../context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
    },
    section: {
      paddingHorizontal: 16,
      marginTop: 24,
    },
    text: {
      marginBottom: 16, 
    },
  });
};

export default useStyles;