import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class RunningStatus extends Component {
    render() {
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    backgroundColor: '#284EAC',
                    height: 30
                }}>
                    <Text style={{color: '#fff'}}>Mã đơn hàng </Text>
                    <Text style={{color: '#fff'}}> - </Text>
                    <Text style={{color: '#fff'}}> Biển số xe</Text>
                </View>

                <ScrollView>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                    }}>
                        <TouchableOpacity
                            style={styles.form}
                        >
                            <Text style={{color: '#284EAC'}}>Điểm 1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.form}
                        >
                            <Text style={{color: '#284EAC'}}>Điểm 2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.form}
                        >
                            <Text style={{color: '#284EAC'}}>Điểm 3</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.form}
                        >
                            <Text style={{color: '#284EAC'}}>Điểm 4</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.form}
                        >
                            <Text style={{color: '#284EAC'}}>Điểm 5</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.form}
                        >
                            <Text style={{color: '#284EAC'}}>Điểm 6</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        borderWidth: 1,
        borderColor: '#284EAC',
        backgroundColor: '#fff',
        marginTop: 10,
        elevation: 10,
        height: 100,
        shadowColor: '#fff',
        shadowOpacity: 0.2,
    },
});

export default RunningStatus;
