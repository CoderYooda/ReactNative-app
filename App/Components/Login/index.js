import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, AsyncStorage, Button } from 'react-native'
import styles from './styles'
export default class Login extends React.Component {
    static navigationOptions = {
    };

    state = {phone: "", password: ""}

    login(){
        const {phone, password} = this.state
        if(phone === '315405'){
            AsyncStorage.setItem('phone', phone);
            //this.props.navigation.navigate('Home');
        } else {
            AsyncStorage.getItem('phone').then(console.log)
        }
    }

    async checkUserSignedIn(){
        let context = this;
        try {
            let value = await AsyncStorage.getItem('phone');
            if (value != null){
                this.props.navigation.navigate('Home');
            }
        } catch (error) {
            console.warn(error)
        }
    }

    render()
    {
        this.checkUserSignedIn();
            return (
                <View style={styles.container}>
                    <TextInput style={styles.input} autoCapitalize="none" placeholder="Номер телефона"
                               onChangeText={ text => this.setState({phone: text}) }
                           name={'email'}/>
                    <TextInput style={styles.input} autoCapitalize="none" placeholder="Ваш пароль" secureTextEntry={true}
                               onChangeText={ text => this.setState({password: text}) }
                           name={'password'}/>
                    <Button
                        title="Войти"
                        color="#236CF5"
                        style={{backgroundColor: '#F8F8F8', marginTop: 30}}
                        onPress={_ => this.login() }
                    />
                </View>
            )
    }
}
