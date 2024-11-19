import {StyleSheet} from 'react-native';

const useStyles = () => {

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#250101",
    },
    section: {
      paddingHorizontal: 16,
      marginTop: 24,
    },
    text: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 16,
    },
  });
};

export default useStyles;