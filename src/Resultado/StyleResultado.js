import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignContent: 'space-around',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'blue',
        margin: 10,
        paddingVertical: 30,
        padding: 20,
    },

    containerTimes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    containerPlacar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',            
    },

    textoX: {
        alignSelf: 'center',
        fontSize: 15
    },

    texto: {
        fontSize: 30
    },  

    textos: {
        alignSelf: 'center',
        paddingTop: 10,
    },

    bandeira: {
        alignSelf: 'center',
        width: 50,
        height: 50,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#D3D3D3',
    }
  })


export default styles;