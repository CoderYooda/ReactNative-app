import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './styles';
import {DrawerItems, NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image} from 'react-native';
import {Container, Content, Header} from "native-base";

class SideMenu extends Component {

    constructor(props)
    {
        super(props)
        //console.log(store.getState());
        //console.log(props);
    }

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render () {
        return (
            <Container>
                <Header style={styles.header}>
                    <Image
                        style={styles.headerimage}
                        source={require('./logo.png')}
                    />
                </Header>
                <Content>
                    <DrawerItems {...this.props}/>
                </Content>
                <View style={styles.footerContainer}>
                    <Image
                        style={styles.footerimage}
                        source={require('./ws.png')}
                    />
                </View>
            </Container>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;