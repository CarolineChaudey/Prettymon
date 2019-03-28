import React, {Component} from 'react';
import { Button, Picker, View } from 'react-native';
import apiData from '../apiData.json';
import MakeupSelectors from './MakeupSelectors';

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
            <MakeupSelectors />
        </View>
      );
    }
  }