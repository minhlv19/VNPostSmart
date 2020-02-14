import React, {Component} from 'react';

import { View, Image, TouchableOpacity ,StyleSheet,Text} from 'react-native';

import {createAppContainer, NavigationActions} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import KpiScreen from '../screen/kpi/KPIScreen';
import TimesheetScreen from '../screen/ timesheets/TimesheetScreen';
import HomeScreen from '../screen/Home/HomeScreen';
import CustomDrawer from './CustomDrawer';

class DrawerNavigator extends Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>

                    <Image
                        source={require('../../asset/image/drawer.png')}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
const Home_StackNavigator = createStackNavigator({
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions:({navigation}) =>({
                headerLeft:<DrawerNavigator navigationProps={navigation} />,
                headerStyle:{
                    backgroundColor:'#fcb71e'
                }
            })

        }
    }
);
const KPI_StackNavigator = createStackNavigator({
    KpiScreen:{
        screen:KpiScreen,
        navigationOptions:({navigation}) =>({
            headerLeft:<DrawerNavigator navigationProps={navigation} />,
            headerStyle:{
                backgroundColor:'#fcb71e'
            }
        })
    }
})
const Timeline_Stacknavigator = createStackNavigator({
    TimesheetScreen:{
        screen:TimesheetScreen,
        navigationOptions:({navigation}) =>({
           headerLeft:<DrawerNavigator navigationProps={navigation} />,
            headerStyle:{
               backgroundColor:'#fcb71e'
            }
        })
    }


})
const Drawer = createDrawerNavigator({
    Home:{
        screen: Home_StackNavigator,
        navigationOptions:{
            drawerLabel:'Home'
        }

    },
    KPI:{
        screen:KPI_StackNavigator,
        navigationOptions:{
            drawerLabel:'KPI'
        }
    },
    Time:{
        screen:KPI_StackNavigator,
        navigationOptions:{
            drawerLabel:'Time'
        }
    }
},{
contentComponent: CustomDrawer
});
export default createAppContainer(Drawer) ;
