import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import { match }  from '../firebase/db.json'
import PartidaMenu from '../PartidaMenu/PartidaMenu.js';

const dadosJSON = match;

function Menu({ navigation }){

    const leitura = ({ item }) => {        
        if(item.home_name === 'Brasil' || item.away_name === 'Brasil')
            return(
                <PartidaMenu  
                    time1={item.home_name} 
                    time2={item.away_name} 
                    id={item.id} 
                    navigation={navigation} 
                    placar={item.score}
                    />
            );
    }

    return(
        <SafeAreaView >
            <FlatList
                data={dadosJSON}
                renderItem={leitura}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

export default Menu;