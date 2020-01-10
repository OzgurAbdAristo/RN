import React, {Component} from 'react';
import {AppRegistry, Text} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

export class init extends Component {
  render() {
    return <Text>slm</Text>;
  }
}
AppRegistry.registerComponent(appName, () => App);
