import React from "react";
import {Button, Text, View} from "react-native";
import {createAppContainer, createDrawerNavigator} from "react-navigation";


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
            </View>
        );
    }
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

const MyDrawerNavigator = createDrawerNavigator(
    {
        Index: {
            screen: Indexer,
        },
        Text: {
            screen: TextPage,
        },
    },
    {
        initialRouteName: "Index"
    }
);




const AppContainer = createAppContainer(MyDrawerNavigator );
//const AppContainer = createAppContainer(AppNavigator);

export default class IndexPage extends React.Component {

    constructor(props)
    {
        super(props)
    }

    render() {
        return (
            <View style={{flex:1}} >
                <Text>123123</Text>
                <AppContainer />
            </View>

        );
    }
}


