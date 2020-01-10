import {AppRegistry} from 'react-native';
import React from 'react';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import App from './App';
import configureStore from './src/store/configureStore';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
