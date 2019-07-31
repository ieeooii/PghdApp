import { AppRegistry } from 'react-native';
import { Userinfo } from './src/components/signup/userinfo.tsx';

console.disableYellowBox = true; // yellow box delete
AppRegistry.registerComponent('tshopequery', () => Userinfo);
