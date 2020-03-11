import React, {Component} from 'react';
//import react in our code.
import {View, Image, TouchableOpacity, StyleSheet, Text, ScrollView} from 'react-native';
import {createAppContainer, NavigationActions} from 'react-navigation';

export default class CustomDrawer extends Component {

    navigateToScreen = (route) => (
        () => {
            const navigateAction = NavigationActions.navigate({
                routeName: route,
            });
            this.props.navigation.dispatch(navigateAction);
        });

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.screenContainer}>
                    <View style={{
                        height: 180,
                        backgroundColor: '#284EAC',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            width: 100,
                            height: 100,
                            backgroundColor: '#fff',
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image source={require('../../asset/image/user.png')}
                                   style={{width: 60, height: 60}}/>
                        </View>
                        <Text style={{color: '#fff', marginTop: 10, fontSize: 16}}>Reus Team</Text>
                    </View>
                    <ScrollView>
                        <View style={[styles.screenStyle]}>
                            {/*<Image source={require('../../asset/image/home.png')} style={{width:20,height:20}} />*/}
                            <Text
                                style={[styles.screenTextStyle, (this.props.activeItemKey == 'Home') ? styles.selectedTextStyle : null]}
                                onPress={this.navigateToScreen('Home')}>Trang Chính</Text>
                        </View>
                        <View style={[styles.screenStyle]}>
                            {/*<Image source={require('../../asset/image/lich-su-chuyen.png')} style={{width:20,height:20}} />*/}
                            <Text
                                style={[styles.screenTextStyle, (this.props.activeItemKey == 'Triphistory') ? styles.selectedTextStyle : null]}
                                onPress={this.navigateToScreen('Triphistory')}>Lịch sử chuyến đi</Text>
                        </View>
                        <View
                            style={[styles.screenStyle, (this.props.activeItemKey == 'Time') ? styles.activeBackgroundColor : null]}>
                            {/*<Image source={require('../../asset/image/bang-cham-cong.png')} style={{width:20,height:20}} />*/}
                            <Text
                                style={[styles.screenTextStyle, (this.props.activeItemKey == 'Time') ? styles.selectedTextStyle : null]}
                                onPress={this.navigateToScreen('Time')}>Bảng chấm công</Text>
                        </View>
                        <View
                            style={[styles.screenStyle, (this.props.activeItemKey == 'Driversalaries') ? styles.activeBackgroundColor : null]}>
                            {/*<Image source={require('../../asset/image/luong-tai-xe.png')} style={{width:20,height:20}} />*/}
                            <Text
                                style={[styles.screenTextStyle, (this.props.activeItemKey == 'Driversalaries') ? styles.selectedTextStyle : null]}
                                onPress={this.navigateToScreen('Driversalaries')}>Lương tài xế</Text>
                        </View>
                        <View
                            style={[styles.screenStyle, (this.props.activeItemKey == 'KPI') ? styles.activeBackgroundColor : null]}>
                            {/*<Image source={require('../../asset/image/kpi.png')} style={{width:20,height:20}} />*/}
                            <Text
                                style={[styles.screenTextStyle, (this.props.activeItemKey == 'KPI') ? styles.selectedTextStyle : null]}
                                onPress={this.navigateToScreen('KPI')}>KPI</Text>
                        </View>
                        <View
                            style={[styles.screenStyle, (this.props.activeItemKey == 'Generalnotification') ? styles.activeBackgroundColor : null]}>
                            {/*<Image source={require('../../asset/image/notification.png')} style={{width:20,height:20}} />*/}
                            <Text
                                style={[styles.screenTextStyle, (this.props.activeItemKey == 'Generalnotification') ? styles.selectedTextStyle : null]}
                                onPress={this.navigateToScreen('Generalnotification')}>Thông báo chung</Text>
                        </View>

                    </ScrollView>
                    <View>
                        <TouchableOpacity style={{
                            backgroundColor: '#284eac', position: 'absolute', bottom: 0, width: '100%', flex: 1,
                            height: 50, justifyContent: 'center', alignItems: 'center',
                        }}
                           onPress={() => this.props.navigation.navigate('Login') }>
                            <Text style={{fontSize: 26, color: '#fff', fontWeight: 'bold'}}>Đăng xuất</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },

    screenContainer: {
        height: '100%',
        width: '100%',
        flex: 1,
    },
    screenStyle: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenTextStyle: {
        flex: 1,
        fontSize: 20,
        marginLeft: 20,
        //textAlign: 'center'
        color: '#284EAC',
    },
    selectedTextStyle: {

        fontWeight: 'bold',
        color: '#284EAC',
    },
    activeBackgroundColor: {color: '#284eac'},
    //activeBackgroundColor: {},
});
