import React, {Component}  from "react";
import {StyleSheet,Text} from "react-native";
import { Header } from 'react-navigation';

class Headera extends Component  {
    render() {
        return (
            <Text style={styles.header}></Text>
        );
    }
}

export default Headera

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(0, 0, 0, 20)',
        alignSelf: 'stretch',
        height: 26,
    },
});