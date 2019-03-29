import React, {Component} from 'react';
import { View } from 'react-native';
import SearchMakeup from './SearchMakeup';
import apiData from "../data/apiData";

import Header from '../PrettyHeader'

export default class MyHomeScreen extends React.Component {

    static propTypes = {
        navigation: 'PropTypes.object'
    }

    static navigationOptions = {
      drawerLabel: 'All makeup'
    };

    constructor(props) {
        super(props);

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

        const { navigation } = this.props;

        const productType = navigation.getParam('productType', 'no-id');
        console.log('toto');
        console.log(productType);

      return (

        <View>
        <Header navigation = {this.props.navigation} title={productType}/>
            <SearchMakeup
                productType = {productType}
                renderDetail = {this.renderDetail}
            />
        </View>
      );
    }
  }
