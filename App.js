import React from 'react';
import Login from './App/Components/Login'
import Home from './App/Root'
import {createAppContainer, createStackNavigator, createSwitchNavigator} from "react-navigation";



//const AppStack = createStackNavigator({ Home: Indexer, Other: TextPage });
const AuthStack = createStackNavigator({ Login: Login });

export default createAppContainer(createSwitchNavigator(
    {
        // AuthLoading: AuthLoadingScreen,
        // App: AppStack,
        Auth: AuthStack,
        Home: Home,
    },
    {
        initialRouteName: 'Auth',
    }
));