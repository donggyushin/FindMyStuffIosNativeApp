/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';

import { Provider, useSelector } from 'react-redux'
import store, { RootReducerType } from './src/store/Store'

import { NavigationContainer } from '@react-navigation/native';
import PrivateNavigation from './src/navigations/PrivateNavigation';
import PublicNavigation from './src/navigations/PublicNavigation';
import React from 'react';
import {
  StatusBar,
} from 'react-native';

declare const global: { HermesInternal: null | {} };

const App = () => {


  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </Provider>
  );
};

const Navigation = () => {
  const userReducer = useSelector((state: RootReducerType) => state.UserReducer)
  return (<NavigationContainer>
    {!userReducer.token ? <PrivateNavigation /> : <PublicNavigation />}
  </NavigationContainer>)
}

export default App;
