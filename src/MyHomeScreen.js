import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions  } from 'react-native';

import { Button } from 'react-native-elements';


import Header from './PrettyHeader'
export default class MyHomeScreen extends React.Component {
  static navigationOptions = {
    // Hide the header from AppNavigator stack
    tabBarVisible: false,
  }


  renderDetail = (url, name) => {
    const params = {
      url: url
    }

    if(name){
      params.name = name
    }
      this.props.navigation.push('Detail', params)
  }
    render() {

      return (

          <View style={styles.bodyStyle}>
            <Header navigation = {this.props.navigation} title="Prettymon"/>

            <View style={styles.content}>
              <Text style={styles.text}>
              Bienvenue sur Prettymon App !
              </Text>
              <Button buttonStyle={styles.button} title="Show a random product"

              onPress={() => this.renderDetail("http://makeup-api.herokuapp.com/api/v1/products/495.json", "random")}
              >

              </Button>
            </View>
          </View>

      );
    }
  }


  const styles = StyleSheet.create({
    bodyStyle: {
      height: Dimensions.get('window').height,
      backgroundColor: "#fab1a0"
    },
    content: {
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    },
    button:{
      backgroundColor: "#bd2c2d"
    },
    text:{
      marginBottom: 10,
      fontSize:20,
    }

  });
