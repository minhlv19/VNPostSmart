import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity,ImageBackground} from 'react-native'
class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    CheckPass=()=>{
    };

    render() {
        return (
            <ImageBackground source={require('../../../asset/next_login.png')}
                style={{flex: 1, justifyContent: 'center'}}>
                <View style={{
                    alignItems: 'center'
                }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Mật khẩu hiện tại"
                        secureTextEntry
                        onChangeText={(pass) => this.setState({pass})}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Mật khẩu mới"
                        secureTextEntry
                        onChangeText={(pass) => this.setState({pass})}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Xác nhận mật khẩu mới"
                        secureTextEntry
                        onChangeText={(pass) => this.setState({pass})}
                    />

                    <TouchableOpacity
                        style={styles.changepass}
                        onPress={this.CheckPass}
                    >
                        <Text style={{
                            color: '#fff',
                            textAlign: 'center',
                            paddingTop: 10
                        }}>Đổi mật khẩu</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}



const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#284EAC',
        width: '80%',
        marginBottom: 20,
        height: 40,
        paddingLeft: 10,
        backgroundColor: '#fff'
    },
    changepass: {
        borderRadius: 15,
        backgroundColor: '#284EAC',
        width: '80%',
        height: 40
    },
});

export default ChangePassword;
