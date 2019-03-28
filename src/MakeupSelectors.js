import React, {Component} from 'react';
import { Button, Picker, View, Text } from 'react-native';
import apiData from '../apiData.json';

export default class MakeupSelectors extends Component {

    constructor(props) {
        super(props);
        this.productTags = apiData.productTags;
        this.state = {
            currentTag: undefined
        }
    }

    render() {
        return (
            <Picker
                selectedValue={this.state.currentTag}
                style={{width: '50%'}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({currentTag: itemValue})
                  }
            >
                {
                    this.productTags.map((item) => {
                        return <Picker.Item label={item.id} value={item.id} />
                    })
                }
            </Picker>
        );
    }
}