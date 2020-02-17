import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
// import HomeHelp from "./Home_Help";
// import VideoHelp from "./Video_Help";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import Contact from "./Contact";
import Received from "./Received";
import Running from "./Running";

const HomeScreenstack = createMaterialTopTabNavigator(
    {
        HomeScreen: {screen: Running},
        Contact: {screen: Contact},
        Received: {screen: Received},

    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#F8F8F8',
            style: {
                backgroundColor: '#2a33ff',
            },
            labelStyle: {
                textAlign: 'center',
            },
            indicatorStyle: {
                borderBottomColor: '#87B56A',
                borderBottomWidth: 2,
            },
        },
    }
);
const TabHomeScreen = createStackNavigator({
    TabHomeScreen: {
        screen: HomeScreenstack,
        navigationOptions: {
            header: null
        }
    }
});
export default createAppContainer(TabHomeScreen);
