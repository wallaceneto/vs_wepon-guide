import {StyleSheet} from 'react-native';

const useStyles = () => {

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
      backgroundColor: '#EBEBEB',
      height: 2,
      width: 'auto',
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
    },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'heavy',
    },
  });
};

export default useStyles;