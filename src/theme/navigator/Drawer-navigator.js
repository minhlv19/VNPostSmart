import React, {Component} from 'react';

import {View, Image, TouchableOpacity, StyleSheet, Text, StatusBar} from 'react-native';

import {createAppContainer, NavigationActions} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import KpiScreen from '../screen/kpi/KPIScreen';
import RefusedScreen from '../screen/refused/RefusedScreen';
import HomeScreen from '../screen/Home/HomeScreen';
import CustomDrawer from './CustomDrawer';
import TripHistoryScreen from '../screen/triphistory/TripHistoryScreen';
import ChangePassword from '../screen/login/ChangePassword';
import GeneralnotificationScreen from '../screen/ generalnotification/GeneralnotificationScreen';

const ChangePassword_Stacknaviation=createStackNavigator({
    ChangePassword:{
        screen:ChangePassword,
        navigationOptions:({navigation}) =>({
            headerLeft:<DrawerNavigator navigationProps={navigation} />,
            headerStyle:{
                backgroundColor:'#284eac',
                marginTop:24,
            }
        })

    }
})

const Triphistory_StackNavigator=createStackNavigator({
    TripHistoryScreen:{
        screen:TripHistoryScreen,
        navigationOptions:({navigation}) =>({
            headerLeft:<DrawerNavigator navigationProps={navigation} />,
            headerStyle:{
                backgroundColor:'#284eac',
                marginTop:24,
            }
        })
    }
})
class DrawerNavigator extends Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row',}}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>

                    <Image
                        source={require('../../asset/image/drawer.png')}
                        style={{ width: 25, height: 25, marginLeft:10    ,marginBottom:6 }}
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
                    backgroundColor:'#284eac',
                    marginTop:24,
                    color:'#fff'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',

                },
                title:'Lệnh mới'
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
                backgroundColor:'#284eac',
                marginTop:24,
            }
        })
    }
})
const Refusede_Stacknavigator = createStackNavigator({
    RefusedScreen:{
        screen:RefusedScreen,
        navigationOptions:({navigation}) =>({
           headerLeft:<DrawerNavigator navigationProps={navigation} />,
            headerStyle:{
                backgroundColor:'#284eac',
                marginTop:24,
            }
        })
    }


});
const Generalnotification_Stacknavigation=createStackNavigator({
    Generalnotification:{
        screen:GeneralnotificationScreen,
        navigationOptions:({navigation}) =>({
            headerLeft:<DrawerNavigator navigationProps={navigation} />,
            headerStyle:{
                backgroundColor:'#284eac',
                marginTop:24,
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
    Generalnotification:{
        screen:Generalnotification_Stacknavigation,
        navigationOptions:{
            drawerLabel:'Generalnotification'
        }
    },
    Triphistory:{
            screen:Triphistory_StackNavigator,
            navigationOptions:{
                drawerLabel:'Triphistory'
            }

    },

    ChangePassword:{
        screen:ChangePassword_Stacknaviation,
        navigationOptions:{
            drawerLabel:'ChangePassword'
        }
    },

    KPI:{
        screen:KPI_StackNavigator,
        navigationOptions:{
            drawerLabel:'KPI'
        }
    },
    Refusede:{
        screen:Refusede_Stacknavigator,
        navigationOptions:{
            drawerLabel:'Refusede'
        }
    }
},{
contentComponent: CustomDrawer
});
export default createAppContainer(Drawer) ;
