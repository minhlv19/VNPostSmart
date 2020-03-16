import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import RunningMap from './RunningMap';
import RunningPic from './RunningPic';
import RunningStatus from './RunningStatus';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

const RunningStatus_Stack = createStackNavigator({
    RunningStatus: {
        screen: RunningStatus,
        navigationOptions:{
            header: null
        }
    },
});

const RunningMap_Stack = createStackNavigator({
    RunningMap: {
        screen: RunningMap,
        navigationOptions:{
            header: null
        }
    },
});

const RunningPic_Stack = createStackNavigator({
    RunningPic: {
        screen: RunningPic,
        navigationOptions:{
            header: null
        }
    },
});

const Running = createMaterialTopTabNavigator({
    RunningStatus: {
        screen: RunningStatus_Stack,
        navigationOptions: {
            tabBarLabel: 'Trạng thái',
        },
    },
    RunningMap: {
        screen: RunningMap_Stack,
        navigationOptions: {
            tabBarLabel: 'Lộ trình',
        },
    },
    RunningPic: {
        screen: RunningPic_Stack,
        navigationOptions: {
            tabBarLabel: 'Hình ảnh',
        },
    },
},
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#F8F8F8',
            style: {
                backgroundColor: '#284eac',
            },
            labelStyle: {
                textAlign: 'center',
            },
            indicatorStyle: {
                borderBottomColor: '#284eac',
            },
        },
    }
    );

export default createAppContainer(Running);
