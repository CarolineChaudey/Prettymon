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

import NavigationDrawerLayout from 'react-native-navigation-drawer-layout';

import DrawerScreen from './DrawerScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: '',
      type: ''
    };
  }

  render() {
    return (
      <NavigationDrawerLayout
        percent={75}
        statusBar="#fd79a8"
        //statusBarTransparency={0.3}
        type={this.state.type}
        drawerPosition="left"
        window="menu"
        color="#fff"
        backgroundColor="#fff" //303030
        imageBackground="https://c.wallhere.com/photos/aa/44/glare_colorful_bright_circles-679384.jpg!d"

        account={[

        ]}

        menu={[
          {
            type: 'menu',
            name: '',
            title: 'Le mie app e i miei giochi',
            icon: 'apps',
            colorText: '#000',
            colorTextFocus: '#4CAF50',
            colorIcon: '#c1c1c1',
            colorIconFocus: '#4CAF50',
            background: 'transparent',
            backgroundFocus: '#e8e8e8',
            badgeText: '100',
            badgeColor: '#fff',
            badgeBackground: '#1194ff',
          },

        ]}
        onPress={e => {
          this.setState({ menu: e.title });
          var type = e.name == 'opt2' ? 'simple' : '';
          this.setState({ type });
          alert("Title:"+e.title+" - "+"Name:"+e.name);
          console.log('Menu:', e);
        }}>
        <View
          style={{
            flex: 1,
            //alignItems: 'flex-end',
          }}>
          <Text style={{ marginTop: 25, marginRight: 5 }}>Hello World!</Text>
          <Text style={{ marginTop: 25, marginRight: 5 }}>
            {this.state.menu}!
          </Text>
        </View>
      </NavigationDrawerLayout>
    );
  }
}

const styles = StyleSheet.create({});
