import {StyleSheet} from 'react-native';

const useStyles = () => {

  return StyleSheet.create({
    container: {
      backgroundColor: "#FFCF67",
      borderRadius: 8,
      height: 60,
      width: 60,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 6,
      marginBottom: 16,
    },
    image: {
      backgroundColor: "#fff",
      borderRadius: 8,
      height: 53,
      width: 53,
    },
  });
};

export default useStyles;