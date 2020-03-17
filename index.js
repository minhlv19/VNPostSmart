/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './src/theme/main/Main';
import Contact from './src/theme/screen/Home/Contact';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';



console.disableYellowBox=true;



AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(Main));
