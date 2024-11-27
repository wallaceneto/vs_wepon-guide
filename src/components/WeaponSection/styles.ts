import {StyleSheet} from 'react-native';
import { useContext } from 'react';

import { ThemeContext } from '../../context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    section: {
      paddingHorizontal: 16,
      marginTop: 24,
    },
    sectionLabel: {
      flexDirection: 'row',
      paddingVertical: 8, 
    },
    icon: {
      color: colors.colapseItemColor,
    },
    text: {
      marginLeft: 8, 
    },
  });
};

export default useStyles;