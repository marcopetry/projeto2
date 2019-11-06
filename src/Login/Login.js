import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Style from './StyleLogin';
import firebase from '../firebase/firebase';

function Login({ navigation }){
    const [email, setEmail] = useState(''), 
          [senha, setSenha] = useState('');
    
    const logar = () => {
        let logou = true;

        if(email === '' || senha === '') {
          alert('Campo email e/ou senha vazio.');
          return;
        }

        firebase.auth().signInWithEmailAndPassword(email, senha)
          .catch((error) => {
            logou = false;
            if(error.code === 'auth/wrong-password' || error.code === 'auth/invalid-email'){
              alert('Email e/ou senha inválida.');
            }else if(error.code === 'auth/user-not-found'){
              alert('Usuário não registrado.');
            }else{
              alert('Problema de conexão.');
            }
            console.log(error);
          })
          .then(() => {
            if(logou){
              alert('Seja bem vindo!');
              setEmail('');
              setSenha('');
              navigation.navigate('Menu');                                         
            }
          });
                
    }
    
    return(
        <View style={Style.container}>
            <Text style={Style.titulo}>
                Realize o login:
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
            
            <TouchableOpacity onPress={logar} style={Style.button}>
                <Text>Logar</Text>
            </TouchableOpacity>
            <Text onPress={() => navigation.navigate('Cadastro')}>Não tenho conta. Criar uma conta.</Text>
        </View>
    );
}

export default Login;