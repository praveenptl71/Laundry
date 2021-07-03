/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {MainStackNavigator} from './src/navigations/MainStackNavigator'

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        {/* <StatusBar animated={false} backgroundColor='#FFFFFF' barStyle='dark-content' /> */}
        <MainStackNavigator />
      </NavigationContainer>
    );
  }
};
