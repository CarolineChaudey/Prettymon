import React, {Component} from 'react';
import { View } from 'react-native';
import SearchMakeup from './SearchMakeup';

export default class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'All makeup'
    };

    constructor(props) {
        super(props);
    }
  
    render() {
      return (
        <View>
            <SearchMakeup />
        </View>
      );
    }
  }