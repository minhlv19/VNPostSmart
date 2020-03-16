import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Data from './Data';

class FlatListItem extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 10,
                        borderWidth: 1,
                        borderColor: '#284EAC',
                        backgroundColor: '#fff',
                        elevation: 10,
                        height: 100,
                        shadowColor: '#fff',
                        shadowOpacity: 0.2,
                    }}>
                        <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        textAlign: 'center',
        fontSize: 16,
    }
});

export default class Received extends Component {
    render() {
        return (
            <View style={{flex: 1, marginTop: 22}}>
                <FlatList
                    data={Data}
                    renderItem={({item})=>{
                        //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            <FlatListItem item={item}>

                            </FlatListItem>);
                    }}
                >
                </FlatList>
            </View>
        );
    }
}
