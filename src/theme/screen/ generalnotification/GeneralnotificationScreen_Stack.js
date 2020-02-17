import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
// import HomeHelp from "./Home_Help";
// import VideoHelp from "./Video_Help";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import GeneralnotificationScreenName from './GeneralnotificationScreen_Name';
import GeneralnotificationScreenUsername from './GeneralnotificationScreen_Username';

const GeneralnotificationScreenstack = createMaterialTopTabNavigator(
    {
        Username: {screen: GeneralnotificationScreenUsername},
        Name: {screen: GeneralnotificationScreenName},

    },
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#F8F8F8',
            style: {
                backgroundColor: '#633689',
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
const TabGeneralnotificationScreen = createStackNavigator({
    TabGeneralnotificationScreen: {
        screen: GeneralnotificationScreenstack,
        navigationOptions: {
            header: null
        }
    }
});
export default createAppContainer(TabGeneralnotificationScreen);
