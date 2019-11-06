import React from 'react';
import { View, Text } from 'react-native';
import styles from './StylePartidaMenu'
import Bandeira  from '../Bandeira/Bandeira'

function PartidaMenu(props){

    const dadosPartida = {
        timeCasa: props.time1,
        visitante: props.time2,
        placar: props.placar
    }

    return(
        <View style={styles.container} onStartShouldSetResponder={() => props.navigation.navigate('Resultado', dadosPartida)}>
            <View style={styles.viewTime}>
                <Bandeira time={props.time1} estilo={styles.estiloBandeira}/>
                <Text style={styles.textoTimes}>{props.time1}</Text> 
            </View>

            <View>
                <Text>X</Text>
            </View>

            <View style={styles.viewTime}>
                <Bandeira time={props.time2} estilo={styles.estiloBandeira}/>                
                <Text style={styles.textoTimes}>{props.time2}</Text>
            </View>
        </View>
    );
}

export default PartidaMenu;