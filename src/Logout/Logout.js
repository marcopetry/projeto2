import React from 'react';
import { Text } from 'react-native';
import firebase from '../firebase/firebase';

function Logout({ navigation }){

    const logout = () => {
        firebase.auth().signOut().then(() => navigation.navigate('Login'));
    }

    return(
        <Text onPress={logout} style={{paddingRight: 20}}>Sair</Text>
    );
}

export default Logout;