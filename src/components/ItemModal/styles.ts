import {StyleSheet} from 'react-native';
import { useContext } from 'react';

import { ThemeContext } from '../../context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    card: {
      backgroundColor: colors.modalColor,
      borderRadius: 16,
      paddingVertical: 22,
      margin: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 12,
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerText: {
      marginLeft: 16,
    },
    divider: {
      backgroundColor: colors.dividerColor,
      height: 2,
      width: 'auto',
      marginVertical: 8,
    },
    content: {
      marginHorizontal: 12,
    },
    contentTopic: {
      flexDirection: 'row',
      marginVertical: 16,
    },
    contentTopicText: {
      maxWidth: '60%',
      marginLeft: 8,
    },
    evolutionTitle: {
      marginVertical: 16,
    },
    evolutionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    evolutionInfo: {
      marginLeft: 12,
    },
    evolutionTopic: {
      flexDirection: 'row',
      marginTop: 14,
    },
    requiredImage: {
      width: 24,
      height: 24,
      marginLeft: 8,
    },
  });
};

export default useStyles;