import React from 'react';
import { Text } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login/Login';
import Menu from './Menu/Menu';
import Cadastro from './Cadastro/Cadastro';
import Resultado from './Resultado/Resultado';
import Logout from './Logout/Logout';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        title: 'Login',
      }),
    },

    Cadastro: {
      screen: Cadastro,
      navigationOptions: ({ navigation }) => ({
        title: 'Cadastro',
      }),
    },

    Menu: {
      screen: Menu,
      navigationOptions: ({ navigation }) => ({
        title: 'Menu',
        headerRight: <Logout navigation={navigation}/>
      }),
    },

    Resultado: {
      screen: Resultado,
      navigationOptions: ({ navigation }) => ({
        title: 'Resultado',
        headerRight: <Logout navigation={navigation}/>
      }),
    },
  },
  {
    initialRouteName: 'Login',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'yellow',
      },
      headerTintColor: 'green',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const App = createAppContainer(AppNavigator);

function Routes(){
    return(
        <App />
    );
}

export default Routes;