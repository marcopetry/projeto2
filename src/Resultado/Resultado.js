import React from 'react';
import { Text, View } from 'react-native';
import Bandeira from '../Bandeira/Bandeira';
import Styles from './StyleResultado';

function Resultado({ navigation }){
    const timeCasa = navigation.getParam('timeCasa', '');
    const visitante = navigation.getParam('visitante', '');
    const placar = navigation.getParam('placar', '');

    return(
        <View style={Styles.container}>            
            <View style={Styles.containerTimes}>
                <View>
                    <Bandeira time={timeCasa} estilo={Styles.bandeira}/>
                    <Text style={Styles.textos}>{timeCasa}</Text>
                </View>

                <View>
                    <Bandeira time={visitante} estilo={Styles.bandeira}/>
                    <Text style={Styles.textos}>{visitante}</Text>
                </View>            
            </View>

            <View style={Styles.containerPlacar}>
                <Text style={Styles.texto}>{placar[0]}</Text>
                <Text style={Styles.textoX}>X</Text>
                <Text style={Styles.texto}>{placar[4]}</Text>
            </View>
        </View>
        
    );
}

export default Resultado;