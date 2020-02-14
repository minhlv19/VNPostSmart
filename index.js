/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './src/theme/main/Main';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';



AppRegistry.registerComponent(appName, () => Main);
