import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

import {
    Avatar,
    StreamApp,
    IconBadge,
} from 'expo-activity-feed';

import ProfileScreen from './pages/ProfilePage';
import HomeScreen from './pages/HomePage';
import Icon from "./components/Icon";


const doNotShowHeaderOption = {
    navigationOptions: {
        header: null,
    },
};

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Search: ProfileScreen,
        Notifications: HomeScreen,
        Profile: HomeScreen,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: () => {
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                    return <Icon name="home" />;
                } else if (routeName === 'Search') {
                    return <Icon name="search" />;
                } else if (routeName === 'Notifications') {
                    return (
                        <IconBadge showNumber>
                            <Icon name="notifications" />
                        </IconBadge>
                    );
                } else if (routeName === 'Profile') {
                    return (
                        <Avatar
                            source={(userData: UserResponse) => userData.data.profileImage}
                            size={25}
                            noShadow
                        />
                    );
                }
            },
        }),
        initialRouteName: 'Home',
    },
);

const Navigation = createStackNavigator({
    Tabs: {
        screen: TabNavigator,
        ...doNotShowHeaderOption,
    },
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
});

const App = createAppContainer(Navigation);

export default App;


