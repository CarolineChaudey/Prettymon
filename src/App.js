/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import MyHomeScreen from './MyHomeScreen';
import MySecondScreen from './MySecondScreen';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';

import DrawerScreen from './DrawerScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Second : {
    screen: MySecondScreen
  }
}, {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 300
});

export default App = createAppContainer(MyDrawerNavigator);
