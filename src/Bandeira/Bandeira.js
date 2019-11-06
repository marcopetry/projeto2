import React from 'react';
import { Image } from 'react-native';

function Bandeira(props){

    if(props.time === 'Brasil'){
        return(
            <Image source={require('../assets/brasil.png')} style={props.estilo}/>
        );        
    }

    if(props.time === 'Venezuela'){
        return(
            <Image source={require('../assets/venezuela.png')} style={props.estilo}/>
        );        
    }

    if(props.time === 'Peru'){
        return(
            <Image source={require('../assets/peru.png')} style={props.estilo}/>
        );        
    }

    return(
        <Image source={require('../assets/bolivia.png')} style={props.estilo}/>
    );
}

export default Bandeira;