import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screen/login/Login';
import DrawerNavigator from '../navigator/Drawer-navigator';
import {createAppContainer} from 'react-navigation';

/*class Main extends Component {
    render() {
        return (
           <DrawerNavigator/>
        );
    }
}*/

const Main = createStackNavigator({
      Login: {screen: Login,
          //xóa khoảng trắng header
          navigationOptions: {header:null}},
      DrawerNavigator: {screen: DrawerNavigator, navigationOptions: {header:null}},
  },
  {
      initialRouteName: 'Login',
  });

export default createAppContainer(Main);
