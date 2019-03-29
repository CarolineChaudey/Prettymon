import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


import Header from './PrettyHeader'
export default class MyHomeScreen extends React.Component {
  static navigationOptions = {
    // Hide the header from AppNavigator stack
    tabBarVisible: false,
  }

    render() {

      return (

          <Header navigation = {this.props.navigation} title="Prettymon"/>

      );
    }
  }
