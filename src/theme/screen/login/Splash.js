import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Login from './Login';
class Splash extends Component{
  render(){
    return(
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
    backgroundColor: '#FCB71E',
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

export default Splash;