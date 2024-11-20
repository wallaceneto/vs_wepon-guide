import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';

const Bottomsheet: React.FC = () => {
  const {t} = useTranslation();
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text>{t('Language')}</Text>
    </View>
  );
}

export default Bottomsheet;