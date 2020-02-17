import React, {Component} from 'react';
import {View,Text, TouchableOpacity} from 'react-native'
import DatePicker from 'react-native-datepicker';
class DriversalariesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            val: 1,
            date: '',
            date_min:'',
            date_max: '',
        }
    }
    componentDidMount() {
        const that = this;
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        that.setState({
            date:
                date + '/' + month + '/' + year
        });
        that.setState({
            date_min:
                date + '/' + month + '/' + year
        });
        that.setState({
            date_max:
                (1+date) + '/' + month + '/' + year
        });
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{width:'100%', height:50 , flexDirection:'row', marginTop:5, marginBottom:5}}>
                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',
                        borderWidth: 1,
                        borderColor: '#d6d7da',}}>
                        <Text>Từ ngày</Text>
                        <DatePicker
                            style={{ width: '100%' }}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="DD-MM-YYYY"
                            minDate={this.state.date_min}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateInput: {
                                    marginLeft: 0,
                                },
                            }}
                            onDateChange={date => {
                                this.setState({ date: date });
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',
                        borderWidth: 1,
                        borderColor: '#d6d7da',}}>
                        <Text>Đến ngày</Text>
                        <DatePicker
                            style={{ width: '100%' }}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="DD-MM-YYYY"
                            minDate={this.state.date_max}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateInput: {
                                    marginLeft: 0,
                                },
                            }}
                            onDateChange={date => {
                                this.setState({ date: date });
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'#2a33ff'}}>
                    <View>
                        <Text style={{textAlign:'center', fontSize:16, marginTop:10, color:'#fff'}}>$ TỔNG SỐ TIỀN NHẬN ĐƯỢC : </Text>
                    </View>
                    <View style={{backgroundColor:'#fff', margin:10, padding:10, borderRadius:5}}>
                        <View>
                            <Text style={{textAlign:'center', fontSize:17,fontWeight:'bold', color:'#2a33ff'}}>CHI TIẾT TỪNG KHOẢN MỤC</Text>
                        </View>
                        <View style={{marginLeft:20,paddingTop:30,paddingBottom:30}}>
                            <View>
                                <Text style={{fontSize:15, fontWeight:'bold'}}>Tổng lương</Text>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>chuyển :</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>Tổng phí phát</Text>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>sinh :</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>Tổng phí trạm : </Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{textAlign:'center', fontSize:16, color:'#fff', marginBottom:20, marginTop:10}}> XEM CHI TIẾT </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default DriversalariesScreen;
