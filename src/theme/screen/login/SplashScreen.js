import React, {Component} from 'react';
import { NavigationActions, StackActions} from 'react-navigation';
import {Text, View, StyleSheet, Image} from 'react-native';
class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
        setTimeout(() => {
            this.navigateLogin('Login')
        }, 3000);
    }
    navigateLogin = (screen) => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: screen })
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>WELCOME TO VNPost-Smart</Text>
                <Image style={styles.image}
                       source={require('../../../asset/image/logo.png')}>
                </Image>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container: {
        backgroundColor: '#284eac',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    image: {
        scaleX: 0.6,
        scaleY: 0.6
    }
})

export default SplashScreen;
