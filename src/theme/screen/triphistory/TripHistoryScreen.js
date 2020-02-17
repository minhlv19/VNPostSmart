import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TripHistoryScreenContainer from "./TripHistoryScreen_Container";
import TripHistoryScreenhoi from "./TripHistoryScreen_hoi";
import DatePicker from "react-native-datepicker";

export default class TripHistoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 1,
            date: '',
            date_min:'',
            date_max: '',};
    }

    renderElement() {
        if (this.state.val === 1) {
            return <TripHistoryScreenContainer/>;
        } else {
            return <TripHistoryScreenhoi/>;
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
            <View style={{flex: 1}}>
                <View style={{backgroundColor:'#22ffee'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center',}}>
                        <TouchableOpacity style={{flex: 1, alignItems: 'center'}}
                                          onPress={() => this.setState({val: 1})}>
                            <Text style={{fontSize: 18, padding: 10}}>Container</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, alignItems: 'center', borderLeftWidth:1,
                        borderLeftColor:'#969696'}}
                                          onPress={() => this.setState({val: 2})}>
                            <Text style={{fontSize: 18, padding: 10}}>Phản hồi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width: '100%', height: 50, flexDirection: 'row', marginTop: 6, marginBottom: 5}}>
                    <TouchableOpacity style={{
                        marginLeft:5,
                        flex: 1, justifyContent: 'center', alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#d6d7da',
                    }}>
                        <Text>Từ ngày</Text>
                        <DatePicker
                            style={{width: '100%'}}
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
                                this.setState({date: date});
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flex: 1, justifyContent: 'center', alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#d6d7da',
                        marginRight:5,
                    }}>
                        <Text>Đến ngày</Text>
                        <DatePicker
                            style={{width: '100%'}}
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
                                this.setState({date: date});
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <View>
                    {this.renderElement()}
                </View>
            </View>
        );
    }
}

