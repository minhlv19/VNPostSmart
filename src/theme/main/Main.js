import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screen/login/Login';
import DrawerNavigator from '../navigator/Drawer-navigator';
import {createAppContainer} from 'react-navigation';

import SplashScreen from '../screen/login/SplashScreen';



const Main = createStackNavigator({
    ScreenLogin:{screen:SplashScreen,navigationOptions: {header:null}},
        Login: {screen: Login,
            navigationOptions: {header:null}},
      DrawerNavigator: {screen: DrawerNavigator, navigationOptions: {header:null}},
  },{
    initialRouteName:'ScreenLogin'
    }
  );

export default createAppContainer(Main);
