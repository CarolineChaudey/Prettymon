import React, {Component} from 'react';
import { Button, ThemeProvider, Icon, Header} from 'react-native-elements';

import MenuButton from './ButtonMenu';


class PrettyHeader extends Component {


  constructor(props) {
    super(props);

  }


  render () {

     return (
       <ThemeProvider>
             <Header
               leftComponent={<MenuButton/>}
               centerComponent={{ text: 'Prettymon', style: { color: '#fff' } }}

             />


       </ThemeProvider>
     );
   }
 }
export default PrettyHeader;
