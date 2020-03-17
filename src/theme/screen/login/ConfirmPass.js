import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ChangePassword from "./ChangePassword";

class ConfirmPass extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    ConfirmPass = ()=>{
    };

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <View style={styles.form}>
                    <View style={{
                        height: 50,
                        width: '100%',
                        backgroundColor: '#284EAC'
                    }}>
                        <TouchableOpacity style={{left: '90%', top: 15}}>
                            <Image source={require('../../../asset/image/close.png')}
                                   style={{
                                       width: 20,
                                       height: 20,
                                   }}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={{
                        color: '#284EAC',
                        padding: 40,
                        fontSize: 20
                    }}>Đổi mật khẩu thành công</Text>
                    <TouchableOpacity
                        style={styles.input}
                        onPress={this.ConfirmPass}
                    >
                        <Text style={{
                            color: '#fff',
                            textAlign: 'center',
                            paddingTop: 10
                        }}>Xác nhận</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
        width: '90%',
        borderWidth: 1,
        borderColor: '#284EAC',
        backgroundColor: '#fff'
    },
    input: {
        borderRadius: 20,
        backgroundColor: '#284EAC',
        width: '50%',
        height: 40,
        marginBottom: 20
    },
});

export default ConfirmPass;
