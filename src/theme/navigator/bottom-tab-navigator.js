import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, NavigationActions} from 'react-navigation';
import {
    HomeNavigator,
    ContactNavigator,
    ReceivedNavigator
} from './screen-stack-navigator';
import {Image} from 'react-native';

const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                tabBarLabel: 'Trang Chủ',
            },
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                tabBarLabel: 'Thông Báo',
            },
        },
        Received: {
            screen: ReceivedNavigator,
            navigationOptions: {
                tabBarLabel: 'Lịch',
            },
        }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({

            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../asset/image/bell.png')
                                    : require('../../asset/image/user.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                    );
                } else if (routeName === 'Contact') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../asset/image/bell.png')
                                    : require('../../asset/image/da-nhan-xanh.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                    );
                } else if (routeName === 'Received') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../asset/image/bang-cham-cong.png')
                                    : require('../../asset/image/dang-chay-xam.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                    );
                }


            }
        }),
        tabBarOptions: {
            activeTintColor: '#42f44b',
            inactiveTintColor: 'gray',
        },
    },
);

export default createAppContainer(BottomTabNavigator);
