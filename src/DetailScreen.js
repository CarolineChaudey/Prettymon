import React from 'react';
import { ActivityIndicator, Text, View, Image, Linking, ScrollView  } from 'react-native';

export default class FetchExample extends React.Component {

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

        return(
            <View style={{flex: 1, paddingTop:50}}>
                <Text> id :{ this.state.dataSource.id} </Text>
                <Image
                    style={{width: 100, height: 100}}
                    source={{uri: this.state.dataSource.image_link}}
                />
                <Text style={{color: 'blue'}}
                      onPress={() => Linking.openURL(this.state.dataSource.product_link)}>
                    Buy it
                </Text>
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
