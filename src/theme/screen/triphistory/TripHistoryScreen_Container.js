import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ImageBackground} from 'react-native';

class TripHistoryScreenContainer extends Component {
    render() {
        return (
            <View style={{padding:10}}>
                <Text style={{fontSize:20, color:'#2a33ff'}}>Không Có Chuyến Hoàn Tất Trong Thời Gian Này</Text>
            </View>
        );
    }
}

export default TripHistoryScreenContainer;
