import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Style from './StyleCadastro';
import firebase from '../firebase/firebase';

function Cadastro({ navigation }){
    const [email, setEmail] = useState(''), 
          [senha, setSenha] = useState('');

    const cadastrar = () => {
        let cadastrou = true;

        if(email === '' || senha === '') {
            alert('Campo email e/ou senha vazio.');
            return;
        }

        if(senha.length < 6){
            alert('Senha precisa ter pelo menos 6 caracteres.');
            return;
        }
        
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .catch( error => {
                cadastrou = false;

                if(error.code === 'auth/email-already-in-use'){
                    alert('Email já está sendo usado.');
                }

                if(error.code === 'auth/invalid-email'){
                    alert('Email não está no formato correto.');
                }
            })
            .then( () => {
                if(cadastrou){
                    alert('Cadastrado com sucesso.');
                    navigation.navigate('Login');
                }
            });
    }
    
    return(
        <View style={Style.container}>
            <Text style={Style.titulo}>
                Faça seu cadastro:
            </Text>
            
            <View style={Style.viewContainer}>
                <Text>Email:</Text>
                <TextInput 
                    onChangeText = {texto => setEmail(texto)}                    
                    value={email} 
                    placeholder="Digite aqui seu email:"
                    />
            </View>

            <View style={Style.viewContainer}>
                <Text>Senha:</Text>
                <TextInput 
                    onChangeText={senha => setSenha(senha)} 
                    value={senha} 
                    placeholder="Digite aqui sua senha:" 
                    secureTextEntry={true}
                    />
            </View>
            
            <TouchableOpacity onPress={cadastrar} style={Style.button}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
            <Text onPress={() => navigation.navigate('Login')}>Já tenho uma conta. Quero logar.</Text>
        </View>
    );
}

export default Cadastro;