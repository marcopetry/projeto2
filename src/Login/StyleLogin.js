import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 30,
      fontFamily: 'Oswald-Light'
    },
    
    titulo: {
        marginBottom: 60,
        fontFamily: 'Oswald-SemiBold',
        fontSize: 30
    },

    viewContainer: {
        marginVertical: 10,
        borderColor: '#000'
    },

    button: {
      alignItems: 'center',
      backgroundColor: 'green',
      borderRadius: 5,
      padding: 10,
      marginVertical: 10
    },
    
  })


export default styles;