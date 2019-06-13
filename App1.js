import React from "react";
import {FlatList, ActivityIndicator, StyleSheet, View, Image, Text } from "react-native";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { useScreens } from 'react-native-screens';
import { Button } from 'react-native-elements';
useScreens();

import Header from './pages/parts/Header'

class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./assets/icon.png')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
            title: 'awd',
            headerTitle: <LogoTitle/>,
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerRight: (
                <Button
                    onPress={() => navigation.navigate('MyModal')}
                    title="Info"
                    color="#fff"
                    loading
                />
            ),
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        };
    }

    setTitle(){
        this.props.navigation.navigate('Details');
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    style={{backgroundColor: 'red', color: 'red'}}
                    //title={this.state.title}
                    title='awd'
                    onPress={() => this.props.navigation.navigate('Details')}
                    icon={
                        <Text>Details Screen</Text>
                    }
                />
                <Button
                    title='Менялка'
                    onPress={() => this.setTitle()}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        };
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
                />
            </View>
        );
    }
}

class ModalScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>This is a modal!</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismiss"
                />
            </View>
        );
    }
}

const MainStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
    },
    {
        /* Same configuration as before */
    }
);

const RootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        MyModal: {
            screen: ModalScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);


const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        MyModal: ModalScreen
    },
    {
        initialRouteName: "Home"
    }
);

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./assets/icons/categories.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

class FetchExample extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            isFetching: false,
        }
    }

    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    isFetching: false,
                    dataSource: responseJson.movies,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    onRefresh() {
        this.setState({ isFetching: true }, function() { this.componentDidMount() });
    }



    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1, paddingTop:20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={({id}, index) => id}
                    onRefresh={() => this.onRefresh()}
                    refreshing={this.state.isFetching}
                />
            </View>
        );
    }
}

const MyDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: FetchExample,
        },
        Notifications: {
            screen: MyNotificationsScreen,
        },
    },
    {
        initialRouteName: "Home"
    });



const AppContainer = createAppContainer(MyDrawerNavigator );
//const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex:1}} >
                <Header/>
                <AppContainer />
            </View>

        );
    }
}