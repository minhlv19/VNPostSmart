import React, {Component} from 'react';
import {AppRegistry } from 'react-native';
import Login from './Login';
import Splash from './Splash';
class ScreenLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: 'Splash' };
    setTimeout(()=>{
      this.setState({ currentScreen: 'Login' })
    }, 3000)
  }
  render() {
    const { currentScreen } = this.state
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />
    return mainScreen
  }
}
export default ScreenLogin;