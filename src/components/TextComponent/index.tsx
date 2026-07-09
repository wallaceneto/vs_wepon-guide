import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { ITextComponentProps } from './types';
import useStyles from './styles';

const TextComponent: React.FC<ITextComponentProps> = ({
  text, 
  size, 
  bold,
  styles
}: ITextComponentProps) => {
  const style = useStyles({size, bold});
  const {t} = useTranslation();

  return (
    <Text style={[styles, style.text]}>
      {t(text)}
    </Text>
  );
}

export default TextComponent;