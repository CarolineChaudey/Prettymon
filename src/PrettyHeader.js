import React, {Component} from 'react';
import { Button, ThemeProvider, Icon, Header} from 'react-native-elements';

import {StyleSheet} from 'react-native';
import MenuButton from './ButtonMenu';


class PrettyHeader extends Component {


  constructor(props) {
    super(props);

  }


  render () {

     return (
       <ThemeProvider>
             <Header
              containerStyle={styles.headerStyle}
               leftComponent={<MenuButton navigation = {this.props.navigation} />}
               centerComponent={{ text: this.props.title, style: { color: '#fff' } }}

             />
       </ThemeProvider>
     );
   }
 }

 const styles = StyleSheet.create({
   headerStyle: {
     backgroundColor: "#bd2c2d"
   }

 });
export default PrettyHeader;
