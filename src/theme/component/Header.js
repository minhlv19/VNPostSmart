import React, {Component} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
const deviceWidth = Dimensions.get("window").width;
class Header extends Component {
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{flex: 0.8}}>
            </View>
        );
    }
}
export class MenuButton extends React.Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>

                <Image
                    source={require('../../asset/image/drawer.png')}
                    style={{width: 50, height: 50}}
                />
            </TouchableOpacity>
        );
    }
}

export default Header;
