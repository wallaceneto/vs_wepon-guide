import {StyleSheet} from 'react-native';
import { useContext } from 'react';

import { ThemeContext } from '../../context';
import { ITextComponentStyle } from './types';

const useStyles = ({size, bold}: ITextComponentStyle) => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    text: {
      color: colors.textColor,
      fontSize: size || 16,
      fontWeight: bold ? 'bold' : 'regular',
    },
  });
};

export default useStyles;