import React, {Component} from 'react';
import {View,Text, TouchableOpacity, TextInput,
        StyleSheet, Image, KeyboardAvoidingView ,
      CheckBox, SafeAreaView,StatusBar,Keyboard,
  TouchableWithoutFeedback} from 'react-native';
import construct from '@babel/runtime/helpers/esm/construct';

class Login extends Component {
  constructor() {
    super();
    this.state = { hidePassword: true }
  }
  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
          <TouchableWithoutFeedback style={styles.container}
                                    onPress={Keyboard.dismiss}>
            <View style={styles.logoContainer}>
              <View style={styles.logoContainer}>
                <Image style={styles.logo}
                       source={require('../../../asset/image/logo.png')}>
                </Image>
              </View>
              <View style={styles.infoContainer}>
                <TextInput style={styles.input}
                           placeholder="Email đăng nhập"
                           keyboardType='email-address'
                           returnKeyType='next'
                           autoCorrect={false}
                           onSubmitEditing={()=> this.refs.txtPassword.focus()}
                />
                <View style={styles.pass}>
                  <TextInput  underlineColorAndroid="transparent" style={styles.input}
                             placeholder="Mật khẩu"
                             returnKeyType='go'
                             secureTextEntry = { this.state.hidePassword }
                  />
                  <TouchableOpacity  style = { styles.iconpass } onPress = { this.managePasswordVisibility }>
                    <Image source = { ( this.state.hidePassword )
                      ? require('../../../asset/image/hide.png')
                      : require('../../../asset/image/uhide.png') }
                           style = { styles.hide } />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCB71E',
    flexDirection: 'column',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1
  },
  logo: {
    width: 250,
    height: 200
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 30
  },
  input: {
    position: 'relative',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 30,
    fontSize: 18,
    backgroundColor:'#fff',
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 20
  },
  buttonContainer: {
    backgroundColor: '#101fca',
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff1f3',
    fontSize: 18,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    paddingTop:5
  },
  pass: {
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  iconpass: {
    position: 'absolute',
    right: 3,
    height: 30,
    width: 30,
    paddingBottom: 5,
    opacity: 0.3
  },
  hide: {
    height: '100%',
    width: '100%'
  }
})

export default Login;