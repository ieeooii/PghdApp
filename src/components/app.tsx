import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const iosStr: string = 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu';
const androidStr: string =
  'Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu';
const instructions = Platform.select({
  ios: iosStr,
  android: androidStr,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export interface Props {}
export interface State {}

export class App extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
