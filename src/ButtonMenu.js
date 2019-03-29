import React, {Component} from 'react';
import { Button, ThemeProvider, Icon} from 'react-native-elements';


import {StyleSheet} from 'react-native';


import DrawerScreen from './DrawerScreen';
class ButtonMenu extends Component {


  constructor(props) {
    super(props);

  }

  render () {
     return (
       <Button
       buttonStyle={styles.buttonStyle}
        onPress={ this.props.navigation.openDrawer}

        icon={
          <Icon

            name="menu"
            size={30}
            color="white"
          />
        }
        />
     );
   }
 }

 const styles = StyleSheet.create({
   buttonStyle: {
     backgroundColor: "#bd2c2d"
   }

 });

export default ButtonMenu;
