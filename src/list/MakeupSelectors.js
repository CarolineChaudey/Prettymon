import React, {Component} from 'react';
import { Picker, View, Text } from 'react-native';
import apiData from '../data/apiData.json';

export default class MakeupSelectors extends Component {

    constructor(props) {
        super(props);
        this.productTags = apiData.productTags;
        this.brands = apiData.brands;
        this.state = {
            currentTag: undefined,
            currentBrand: undefined
        }
    }

    renderPickerItems(values) {
        return values.map((item) => {
            return <Picker.Item label={item.id} value={item.id} />
        });
    }

    tagChanges(value) {
        this.setState({
            currentTag: value
        });
        this.props.onTagChange(value);
    }

    brandChanges(value) {
        this.setState({
            currentBrand: value
        });
        this.props.onBrandChange(value);
    }

    render() {
        const labelStyle = {
            fontSize: 20
        };
        return (
            <View style={{ margin: 10 }}>
                <View style={{flexDirection: 'row'}} >
                    <Text style={labelStyle} >Tag : </Text>
                    <Picker
                        selectedValue={this.state.currentTag}
                        style={{width: '50%'}}
                        onValueChange={(itemValue) =>
                            this.tagChanges(itemValue)
                        }
                    >
                        { this.renderPickerItems(this.productTags) }
                    </Picker>
                </View>
                <View style={{flexDirection: 'row'}} >
                    <Text style={labelStyle}>Brand : </Text>
                    <Picker
                        selectedValue={this.state.currentBrand}
                        style={{width: '50%'}}
                        onValueChange={(itemValue) =>
                            this.brandChanges(itemValue)
                        }
                    >
                        { this.renderPickerItems(this.brands) }
                    </Picker>
                </View>
            </View>
        );
    }
}