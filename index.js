import { AppRegistry } from 'react-native';
import App from './app';

console.disableYellowBox = true; // yellow box delete
// console.ignoredYellowBox = ['react-native BugReporting extraData:'];
AppRegistry.registerComponent('tshopequery', () => {
  return App;
});
