import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home'
    };

    render() {
      return (

        <View
        style={styles.container}>

        <Button
          // onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff7675',
  },

});
