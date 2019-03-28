import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';

import {ScrollView, Button, View} from 'react-native';
import { DrawerActions } from 'react-navigation';


class DrawerScreen extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render () {
    return (
      <View>
        <ScrollView>
          <View>
            <View>
              <Button title="Home" onPress={this.navigateToScreen('Home')}>
              </Button>
            </View>
            <View >
              <Button title="Second" onPress={this.navigateToScreen('About')}>
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}


export default DrawerScreen;
