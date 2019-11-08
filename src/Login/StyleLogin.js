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
        borderColor: '#000',        
    },

    text: {
      fontSize: 24
    },

    input: {
      backgroundColor: '#fff',
      borderRadius: 10,
      borderColor: '#000',
      borderWidth: 1,
    },

    button: {
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      marginTop: 20,
      borderColor: '#000',
      borderWidth: 1,
    },
    
  })


export default styles;