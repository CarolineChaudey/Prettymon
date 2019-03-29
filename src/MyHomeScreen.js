import React, {Component} from 'react';

import { Header, Button, ThemeProvider} from 'react-native-elements';

export default class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home'
    };

    render() {
      return (

        <ThemeProvider>
              <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Prettymon', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
              />
            <Button title="Hey!" />
        </ThemeProvider>

      );
    }
  }
