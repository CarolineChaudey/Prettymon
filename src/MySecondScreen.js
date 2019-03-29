import React, {Component} from 'react';
import { Button } from 'react-native';

export default class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Second'
    };

    render() {
      const { navigation } = this.props;

      console.log(navigation)
      const itemId = navigation.getParam('productType', 'NO-ID');

      return (
        <Button
          // onPress={() => this.props.navigation.navigate('Notifications')}
          title={itemId}
        />
      );
    }
  }
