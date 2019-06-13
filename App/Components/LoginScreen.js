import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import { StyleSheet, View, Text, TextInput, AsyncStorage, Button } from 'react-native'
import TInput from './TInput'
import { NavigationActions } from 'react-navigation';
class LoginScreen extends React.Component {

    static navigationOptions = {
        title: 'Please sign in',
    };

    constructor(props)
    {
        super(props)
        this._signInAsync
    }

    _signInAsync = async () => {
        alert(1);
        let {auth} = this.props;
        if (auth.access_token !== '') {
            //console.log(this.props.auth);
            await AsyncStorage.setItem('auth', this.props.auth.access_token);
            this.props.navigation.navigate('App');
        } else {
            this.onLogout();
        }
    };



        showLogin(props)
        {
            let {onLogin, onLogout, onUser, handleSubmit, auth} = props
            if (auth.access_token === '') {
                return (
                    <View style={styles.container}>
                        <Field style={styles.input} autoCapitalize="none" placeholder="Email" component={TInput}
                               name={'email'}/>
                        <Field style={styles.input} autoCapitalize="none" placeholder="Password" secureTextEntry={true}
                               component={TInput} name={'password'}/>
                        <Button
                            title="Войти"
                            color="#236CF5"
                            style={{backgroundColor: '#F8F8F8'}}
                            onPress={handleSubmit(onLogin)}
                        />
                    </View>
                )
            } else {
                return(
                    <View>
                        <Button title="Sign in!" onPress={this._signInAsync} />
                    </View>
                )
            }

        }
        render()
        {

            return this.showLogin(this.props)
        }
}

export default reduxForm({ form: 'login' })(LoginScreen); 

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        height:40,
        width:300,
        padding:5,
        borderWidth:0,
        borderBottomWidth:2,
        borderBottomColor:'#236CF5',
        borderColor:'gray',
        margin:10
    }
})