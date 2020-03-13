import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Contact from './Contact';
import Running from './Running';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Received from './Received';
const Received_Stack = createStackNavigator({
    Received: {
        screen: Received,
        navigationOptions:{
            header:null
        }
    },
});
const Constact_Stack = createStackNavigator({
    Contact: {
        screen: Contact,
        navigationOptions:{
            header:null
        }
    },
});
const Running_Stack = createStackNavigator({
    Running: {
        screen: Running,
        navigationOptions:{
            header: null
        }
    },
});

const HomeScreen = createBottomTabNavigator({
        Contact: {
            screen: Constact_Stack,
            navigationOptions: {
                tabBarLabel: 'Lệnh mới',
            },
        },
    Received: {
        screen: Received_Stack,
        navigationOptions: {
            tabBarLabel: 'Đã nhận',
        },
    },

        Running: {
            screen: Running_Stack,
            navigationOptions: {
                tabBarLabel: 'Đang chạy',
            },
        },
    }, {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                if (routeName === 'Contact') {
                    return (
                        <Image source={
                            focused
                                ? require('../../../asset/image/lenh-moi.png')
                                : require('../../../asset/image/lenh-moi-xam.png')
                        }
                               style={{
                                   width: 20,
                                   height: 20,
                               }}/>

                    );
                }else if (routeName === 'Received') {
                    return (
                        <Image source={
                            focused
                                ? require('../../../asset/image/da-nhan-xanh.png')
                                : require('../../../asset/image/da-nhan-xam.png')
                        }
                               style={{
                                   width: 20,
                                   height: 20,
                               }}/>

                    );
                }else if (routeName === 'Running') {
                    return (
                        <Image source={
                            focused
                                ? require('../../../asset/image/dang-chay-xanh.png')
                                : require('../../../asset/image/dang-chay-xam.png')
                        }
                               style={{
                                   width: 20,
                                   height: 20,
                               }}/>

                    );
                }
            },
        }),
        tabBarOptions: {
            activeTintColor: '#0137be',
            inactiveTintColor: 'gray',
        },
    });
export default HomeScreen;

