import React from "react";
import {Button, View} from "react-native";


export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Мой профиль',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Button
                    title="Домой"
                    onPress={() => navigate('Home', {name: 'Jane'})}
                />
            </View>
        );
    }
}