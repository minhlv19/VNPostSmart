import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity ,StyleSheet,Text} from 'react-native';
import {createAppContainer, NavigationActions} from 'react-navigation';

export default class CustomDrawer extends Component {

    navigateToScreen = ( route ) =>(
        () => {
            const navigateAction = NavigationActions.navigate({
                routeName: route
            });
            this.props.navigation.dispatch(navigateAction);
        })

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.screenContainer}>
                    <View>
                        <Image source={require('../../asset/image/user.png')}/>
                    </View>

                    <View style={[styles.screenStyle]}>
                        <Image source={require('../../asset/image/home.png')} style={{width:20,height:20}} />
                        <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Home') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Home')}>Trang Chính</Text>
                    </View>
                    <View style={[styles.screenStyle]}>
                        <Image source={require('../../asset/image/lich-su-chuyen.png')} style={{width:20,height:20}} />
                        <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Triphistory') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Triphistory')}>Lịch sử chuyến đi</Text>
                    </View>
                    <View style={[styles.screenStyle, (this.props.activeItemKey=='Time') ? styles.activeBackgroundColor : null]}>
                        <Image source={require('../../asset/image/bang-cham-cong.png')} style={{width:20,height:20}} />
                        <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Time') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Time')}>Bảng chấm công</Text>
                    </View>
                    <View style={[styles.screenStyle, (this.props.activeItemKey=='Driversalaries') ? styles.activeBackgroundColor : null]}>
                    <Image source={require('../../asset/image/luong-tai-xe.png')} style={{width:20,height:20}} />
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Driversalaries') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Driversalaries')}>Lương tài xế</Text>
                </View>
                    <View style={[styles.screenStyle, (this.props.activeItemKey=='KPI') ? styles.activeBackgroundColor : null]}>
                        <Image source={require('../../asset/image/kpi.png')} style={{width:20,height:20}} />
                        <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='KPI') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('KPI')}>KPI</Text>
                    </View>
                    <View style={[styles.screenStyle, (this.props.activeItemKey=='Generalnotification') ? styles.activeBackgroundColor : null]}>
                        <Image source={require('../../asset/image/notification.png')} style={{width:20,height:20}} />
                        <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Generalnotification') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Generalnotification')}>Thông báo chung</Text>
                    </View>


                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    headerContainer: {
        height: 150,
    },
    headerText: {
        color: '#fff8f8',
    },
    screenContainer: {
        paddingTop: 20,
        width: '100%',
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle:{
        fontSize: 20,
        marginLeft: 20,
        textAlign: 'center'
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: '#00adff'
    },
    activeBackgroundColor: {

    }
});
