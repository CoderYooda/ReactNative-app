import React, { Component } from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    Button,
    View,
} from 'react-native';

import {Container, Content, Header, Left, Body, Icon} from 'native-base'

import {createSwitchNavigator, createStackNavigator,DrawerItems, createAppContainer, createDrawerNavigator} from 'react-navigation';
import Image from "react-native-web/src/exports/Image";


class HomeScreen extends React.Component {

    constructor(props)
    {
        super(props)
        //console.log(store.getState());
        //console.log(props);
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
        //await AsyncStorage.clear();

        this.props.navigation.navigate('Auth');
    };
}

const customNavigator = (props) => {
    <Container>
        <Header style={{height:250}}>
            <Image
                source={'../assets/icon.png'}
            />
        </Header>
        <Content>
            <DrawerItems {...props}/>
        </Content>
    </Container>
}

const MyDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
    },
    {
        initialRouteName: "Home",
        contentComponent: customNavigator
    });


const AppContainer = createAppContainer(MyDrawerNavigator);

export default class Home extends React.Component {
    render() {
        return (
            <View style={{flex:1}} >
                <AppContainer />
            </View>

        );
    }
}


// class AuthLoadingScreen extends React.Component {
//     constructor(props) {
//         super(props);
//         this._bootstrapAsync();
//     }
//
//     // Fetch the token from storage then navigate to our appropriate place
//     _bootstrapAsync = async () => {
//         const auth = await AsyncStorage.getItem('auth');
//         console.log(auth);
//         // This will switch to the App screen or Auth screen and this loading
//         // screen will be unmounted and thrown away.
//         this.props.navigation.navigate(auth !== '' ? 'App' : 'Auth', {auth:auth});
//     };
//
//     // Render any loading content that you like here
//     render() {
//         return (
//             <View>
//                 <ActivityIndicator />
//                 <StatusBar barStyle="default" />
//             </View>
//         );
//     }
// }


