/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './src/theme/main/Main';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import Login from './src/theme/screen/login/Login';


console.disableYellowBox=true



AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(Login));
