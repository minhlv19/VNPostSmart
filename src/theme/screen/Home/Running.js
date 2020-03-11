import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import Runningmap from './Running_map';
import Runningpic from './Running_pic';
import Runningstatus from './Running_status';


class Running extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 1};
    }

    renderElement() {
        if (this.state.val === 1) {
            return <Runningstatus/>;
        } else if (this.state.val === 2){
            return <Runningmap/>;
        } else {
            return <Runningpic/>;
        }
    }

    render() {
        return (
            <View>
                <View style={{flexDirection: 'row', marginTop: 2}}>
                    <TouchableOpacity style={styles.button}
                                      onPress={() => this.setState({val: 1})}
                    >
                        <Text style={styles.text}>Trạng thái</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                                      onPress={() => this.setState({val: 2})}
                    >
                        <Text style={styles.text}>Lộ trình</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                                      onPress={() => this.setState({val: 3})}
                    >
                        <Text style={styles.text}>Hình ảnh</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {this.renderElement()}
                </View>
            </View>
        );
    }
}


const styles=StyleSheet.create({
    button: {
        flex: 1,
        margin: 0,
        borderWidth: 1,
        borderColor: '#101fca'
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        padding: 10,
        color: '#101fca'
    },
});

export default Running;
