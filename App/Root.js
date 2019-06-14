import React, { Component } from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    Button,
    View,
    Text
} from 'react-native';

import {Container, Content, Header, Left, Body} from 'native-base'

import {createSwitchNavigator, createStackNavigator, DrawerItems, createAppContainer, createDrawerNavigator} from 'react-navigation';
import Image from "react-native-web/src/exports/Image";
import SideMenu from '../components/SideMenu';
import Icon from 'react-native-vector-icons/Ionicons';


class HomeScreen extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Главная',
        drawerIcon:({TinColor}) => <Text>123</Text>,
        //drawerLabel: () => <Text>222</Text>
    };



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
    _signOutAsync = () => {
        AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
        console.warn('На логин');
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
        Home2: {
            screen: HomeScreen,
        },
        Home3: {
            screen: HomeScreen,
        },
        Home4: {
            screen: HomeScreen,
        },
    },
    {
        initialRouteName: "Home",
        contentComponent: SideMenu
    });


const AppContainer = createAppContainer(MyDrawerNavigator);

export default class Home extends React.Component {
    render() {
        return (
            <View style={{flex:1}} >
                {/*<Text style={{height:28, backgroundColor: 'rgba(51, 51, 51, 1)'}}/>*/}
                <AppContainer />
            </View>
        );
    }
}


