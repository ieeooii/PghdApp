/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// eslint-disable-next-line quotes
import { AppRegistry } from "react-native";
// eslint-disable-next-line quotes
import { App } from "./build/app";

// eslint-disable-next-line quotes
AppRegistry.registerComponent("tshopequery", () => App);
