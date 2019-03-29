import React, {Component} from 'react';
import { View, Text } from 'react-native';
import MakeupSelectors from './MakeupSelectors';
import apiData from '../apiData.json';
import { FlatList } from 'react-native-gesture-handler';

export default class SearchMakeup extends Component {
    constructor(props) {
        super(props);
        this.tagChanged = this.tagChanged.bind(this);
        this.brandChanged = this.brandChanged.bind(this);
        this.state = {
            tag: undefined,
            brand: undefined,
            results: undefined
        };
    }

    tagChanged(newTag) {
        this.setState({
            tag: newTag
        }, () => {
            this.searchResults()
        });
    }

    brandChanged(newBrand) {
        this.setState({
            brand: newBrand
        }, () => {
            this.searchResults()
        });
    }

    searchResults() {
        let url = apiData.baseUrl + '?';
        let brand_option = undefined;
        let tag_option = undefined;
        let type_option = undefined;
        if (this.state.brand)
            brand_option = 'brand=' + this.state.brand;
        if (this.state.tag)
            tag_option = 'product_tags=' + this.state.tag;
        if (this.props.product_type)
            type_option = 'product_type=' + this.props.product_type;
        let options = [type_option, brand_option, tag_option];
        let option_string ='';
        options.map((value) => {
            if (value)
                option_string += value + '&';
        });
        url += option_string;

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            this.setState({
                results: data
            });
        })
        .catch((err) => {
            this.setState({
                results: err.message
            });
        });
    }

    renderLine(item) {
        return (
            <View style={{ padding: 5 }}>
                <Text>Brand : {item.brand}</Text>
                <Text>Name : {item.name}</Text>
                <Text>Category : {item.category}</Text>
                <Text>type : {item.product_type}</Text>
                <Text>price : {item.price} {item.price_sign}</Text>
            </View>
        );
    }

    render() {
        return (
            <View>
                <MakeupSelectors
                    onTagChange={this.tagChanged}
                    onBrandChange={this.brandChanged}
                />
                {
                    this.state.results ?
                    <FlatList
                        data={this.state.results}
                        renderItem={({item}) => this.renderLine(item)}
                    />
                    : <Text>No results</Text>
                }
            </View>
        );
    }
}