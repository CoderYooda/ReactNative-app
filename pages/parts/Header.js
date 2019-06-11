import React, {Component}  from "react";
import {StyleSheet, Button, View, Text} from "react-native";

class Header extends Component  {


    render() {
        return (
            <Text style={styles.header}>123</Text>
        );
    }
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(0, 0, 0, 20)',
        alignSelf: 'stretch',
        height: 26,
    },
});