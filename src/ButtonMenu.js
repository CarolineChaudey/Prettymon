import React, {Component} from 'react';
import { Button, ThemeProvider, Icon} from 'react-native-elements';

import DrawerScreen from './DrawerScreen';
class ButtonMenu extends Component {


  constructor(props) {
    super(props);

  }


  render () {


     return (
       <Button
        icon={
          <Icon
            onPress={DrawerScreen.toggleDrawer}
            name="menu"
            size={30}
            color="white"
          />
        }

      />
     );
   }
 }
export default ButtonMenu;
