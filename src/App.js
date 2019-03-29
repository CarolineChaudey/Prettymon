/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';
import MyHomeScreen from './list/MyHomeScreen';
import StartScreen from './MyHomeScreen';
import MySecondScreen from './MySecondScreen';
import DetailScreen from './DetailScreen';
import {createDrawerNavigator,createStackNavigator, createAppContainer} from 'react-navigation';

import DrawerScreen from './DrawerScreen';


const MyDrawerNavigator = createDrawerNavigator({
    Start: {
      screen: StartScreen
    },
  Home: {
    screen: MyHomeScreen
  }
}, {
    initialRouteName: 'Start',
    contentComponent: DrawerScreen,
    drawerWidth: 300
});

const MyStackNavigator = createStackNavigator({
  List: {
    screen: MyDrawerNavigator
  },
  Detail: {
    screen: DetailScreen
  }
}, {
  initialRouteName: 'List'
});

export default App = createAppContainer(MyStackNavigator);
