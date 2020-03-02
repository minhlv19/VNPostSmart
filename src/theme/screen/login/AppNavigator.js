import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './Login';
import Logout from './Logout';

const AppNavigator = createStackNavigator({
    Login: {screen: Login,
      //xóa khoảng trắng header
    navigationOptions: {header:null}},
    Logout: {screen: Logout},
  },
  {
    initialRouteName: 'Login',
  });
export default createAppContainer(AppNavigator);