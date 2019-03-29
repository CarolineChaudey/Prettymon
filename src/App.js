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
