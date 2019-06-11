import React from "react";
import {Button, View} from "react-native";

import Icon from '../components/Icon';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <Icon name="notifications" />
                <Button
                    title="К профилю"
                    onPress={() => navigate('Profile', {name: 'Jane'})}
                />
            </View>
        );
    }
}