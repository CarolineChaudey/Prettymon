import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';

import {ScrollView, Button, View, StyleSheet} from 'react-native';
import { DrawerActions } from 'react-navigation';

import apiData from '../apiData.json';


class DrawerScreen extends Component {
  navigateToScreen = (route) => {


    this.productTags = apiData.productTags;
      console.log(apiData.productTags)
    }
}

  render () {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View>

            </View>

            <View >
              <Button title="Second" onPress={this.navigateToScreen('Second')}>
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:100,
    backgroundColor: '#fab1a0',
  },
  header: {
    width:100,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default DrawerScreen;
