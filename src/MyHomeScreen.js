import React, {Component} from 'react';

import {Button, ThemeProvider} from 'react-native-elements';


import Header from './PrettyHeader';

export default class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home'
    };

    render() {
      return (

          <Header navigation = {this.props.navigation}/>

      );
    }
  }
