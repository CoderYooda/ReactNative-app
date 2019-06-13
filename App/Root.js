import React, { Component } from 'react'
import Login from './Containers/Login'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    Button,
    View,
} from 'react-native';

import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.


class Indexer extends React.Component {

    constructor(props)
    {
        super(props)
        console.log(props);
    }

    render() {
        return (
            <View>
                <Button
                    title='awdddd'
                />
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
            </View>
        );
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

class TextPage extends React.Component {
    render() {
        return (
            <View>
                <Button
                    title="К ntrcne"
                />
            </View>
        );
    }
}


const AppStack = createStackNavigator({ Home: Indexer, Other: TextPage });
const AuthStack = createStackNavigator({ SignIn: Login });


class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const auth = await AsyncStorage.getItem('auth');
        console.log(auth);
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(auth !== '' ? 'App' : 'Auth', {auth:auth});
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}


export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));


