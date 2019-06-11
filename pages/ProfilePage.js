import React from "react";
import {Button, View} from "react-native";

//import Icon from "../components/Icon";
import Menu from '../sidemenu/ExpMenu';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Мой профиль',
    };
    render() {
        const {navigate} = this.props.navigation;
        const menu = <Menu navigator={navigator}/>;
        return (
            <view>
                <Menu/>
                <Button
                    title="Домой"
                    onPress={() => navigate('Home', {name: 'Jane'})}
                />
            </view>
        );
    }
}