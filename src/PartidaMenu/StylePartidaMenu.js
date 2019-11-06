import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',     
      paddingHorizontal: 30,
      fontFamily: 'Oswald-Light',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'blue', 
      margin: 5,
      paddingVertical: 8
    },

    viewTime: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginVertical: 5
    },

    viewNomesTimes: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignContent: 'space-around'
    },

    /* textoTimes: {
      alignSelf: 'center',
      alignContent: 'center',
      alignItems: 'center'
    }, */

    estiloBandeira: {
      width: 50,
      height: 50,
      borderRadius: 5,
      borderColor: 'gray',
    }
  });

export default styles;