import React from 'react';
import { Dimensions, StyleSheet, ActivityIndicator, Text, View, Image, Linking, ScrollView } from 'react-native';

import { Button } from 'react-native-elements';

export default class DetailScreen extends React.Component {

  static navigationOptions = (params) => {
     return {
       title: params.navigation.getParam("name", "pas de nom"),
       headerStyle: {
       backgroundColor: '#bd2c2d',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold',
     },
   }
 };

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
        console.log(props)
    }

    componentDidMount(){


        return fetch(this.props.navigation.getParam('url'))
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            })
    }


    render(){


        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 50}}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }

        const tagList = (this.state.dataSource.tag_list  && this.state.dataSource.tag_list ? this.state.dataSource.tag_list.map((tag)=> <Text style={{marginLeft: 10}}>{tag}</Text>): '');
        console.log(this.state.dataSource.name)

        return(
            <View style={styles.body}>
                <Text> id :{ this.state.dataSource.id} </Text>
                <Image
                    style={styles.image}
                    source={{uri: this.state.dataSource.image_link}}
                />
                <Button title="Buy it" style={{color: 'blue'}}
                      onPress={() => Linking.openURL(this.state.dataSource.product_link)}>

                </Button>
                <View style={{height: 100}} >
                    <ScrollView>
                        <Text>{this.state.dataSource.description}</Text>
                    </ScrollView>
                </View>
                <Text>Tag :</Text>
                {tagList}
            </View>
        );
    }
}

const styles = StyleSheet.create({

  body:{
      alignItems: 'center',
    height:Dimensions.get('window').height,
    backgroundColor: "#fab1a0"
  },
  imageContainer:{
  alignItems: 'center'
  },
  image:{
    width:300,
    height:300,

  }


});
