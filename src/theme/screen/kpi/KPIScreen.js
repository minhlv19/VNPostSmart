import React, {Component} from 'react';
import {View,Text } from 'react-native'
class KpiScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{
                    width:'94%',
                    height:140,
                    backgroundColor:'#e1e1e1',
                    marginTop:20,
                    marginRight:10,
                    marginLeft:10,
                    borderRadius:5,
                }}>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Text style={{fontSize:28,color:'#218DB1'}}>APK Tài Xế Tháng </Text>
                        <Text style={{fontSize:28,color:'#218DB1'}}>2</Text>
                    </View>
                    <View style={{margin:5, marginLeft:10}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:18,color:'#000'}}>Số lần nhận lệnh mới : </Text>
                            <Text style={{fontSize:18,color:'#000'}}>0</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:18,color:'#000'}}>Số lần từ chối nhận lệnh mới : </Text>
                            <Text style={{fontSize:18,color:'#000'}}>0</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:18,color:'#000'}}>Số lần từ chối nhận lệnh đã nhận : </Text>
                            <Text style={{fontSize:18,color:'#000'}}>0</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default KpiScreen;
