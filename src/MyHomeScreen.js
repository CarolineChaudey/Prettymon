import React, {Component} from 'react';
import { View } from 'react-native';
import SearchMakeup from './SearchMakeup';

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

    renderDetail = (url) => {
        this.props.navigation.push('Detail', {
            url: url,
        })
    }
  
    render() {
      return (
        <View>
            <SearchMakeup
                renderDetail={this.renderDetail}
            />
        </View>
      );
    }
  }