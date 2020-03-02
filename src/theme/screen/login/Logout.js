import React, {Component} from 'react';
import {View,Text} from 'react-native';

class Logout extends Component {
    static navigationOptions = {
        title: 'Second Page',
    };
    render() {
        const navigate = this.props.navigation;
        return (
            <View>
               <Text>Logout</Text>
            </View>
        );
    }
}

export default Logout;
