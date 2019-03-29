import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';

import {ScrollView, View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import { DrawerActions } from 'react-navigation';

import { Button, ThemeProvider} from 'react-native-elements';

import apiData from '../apiData.json';


class DrawerScreen extends Component {


  constructor(props) {
    super(props);

    this.productType = apiData.productType;


  }

  navigateToScreen = (route) => () => {
      const navigateAction = NavigationActions.navigate({
        routeName: route
      });
      this.props.navigation.dispatch(navigateAction);
      this.props.navigation.dispatch(DrawerActions.closeDrawer())
}


  render () {


     return (
       <View style={styles.menuStyle}>
         <ScrollView >



            <Image style={styles.header} source={require('../assets/makupHeader.jpg')}>

            </Image>

             <ThemeProvider>
             {
                this.productType.map((item) => {
                  return <Button buttonStyle={styles.buttonMenu} title={item.id} onPress={this.navigateToScreen('Second')}> </Button>
                })
              }
              </ThemeProvider>
         </ScrollView>
       </View>
     );
   }
 }


const styles = StyleSheet.create({

  header: {
    alignSelf: 'stretch',
    textAlign: 'center',
    height:150,
    width:300,
  },
  menuStyle: {
    height: Dimensions.get('window').height,
    backgroundColor: "#bd2c2d"
  },
  buttonMenu: {
    alignSelf: 'stretch',
    textAlign: 'center',
    height:100,
    marginTop:10,
    borderRadius:0,
    backgroundColor:"#d63031"
  }


});

export default DrawerScreen;
