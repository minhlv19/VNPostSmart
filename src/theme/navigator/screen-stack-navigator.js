import React from "react";
import {createStackNavigator} from 'react-navigation-stack';

import Contact from '../screen/Home/Contact';
import Received from '../screen/Home/Received';
import Running from '../screen/Home/Running';
import HomeScreen from "../screen/Home/HomeScreen";


export const HomeNavigator = createStackNavigator({
    HomeScreen: { screen: HomeScreen,navigationOptions: {
            header: null
        } }
});
export const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact,navigationOptions: {
            header: null
        } },

});
export const ReceivedNavigator = createStackNavigator({
    Received: { screen: Received ,navigationOptions: {
            header: null
        }}
});
export const RunningNavigator = createStackNavigator({
    Running: { screen: Running ,navigationOptions: {
            header: null
        }}
});



