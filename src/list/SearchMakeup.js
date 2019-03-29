import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import MakeupSelectors from './MakeupSelectors';
import apiData from '../data/apiData.json';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default class SearchMakeup extends Component {

    static propTypes = {
        productType: 'PropTypes.string',
        renderDetail: 'PropTypes.func'
    }

    constructor(props) {
        super(props);
        this.tagChanged = this.tagChanged.bind(this);
        this.brandChanged = this.brandChanged.bind(this);
        this.state = {
            isLoading: false,
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

        console.log(this.props.productType);
        if (this.state.brand)
            brand_option = 'brand=' + this.state.brand;
        if (this.state.tag)
            tag_option = 'product_tags=' + this.state.tag;
        if (this.props.productType)
            type_option = 'product_type=' + this.props.productType;
        let options = [type_option, brand_option, tag_option];
        let option_string ='';
        options.map((value) => {
            if (value)
                option_string += value + '&';
        });
        url += option_string;

        this.setState({
            isLoading: true
        });
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                isLoading: false,
                results: data
            });
        })
        .catch((err) => {
            this.setState({
                results: err.message
            });
        });
    }

    renderLine = (item) => {
        return (
            <TouchableOpacity
                style={{ padding: 5 }}
                onPress={() => this.props.renderDetail(item.product_api_url)}
            >
                <Text>Brand : {item.brand}</Text>
                <Text>Name : {item.name}</Text>
                <Text>Category : {item.category}</Text>
                <Text>type : {item.product_type}</Text>
                <Text>price : {item.price} {item.price_sign}</Text>
            </TouchableOpacity>
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
                    (! this.state.isLoading  ?
                        ( this.state.results ?
                                <FlatList
                                    data={this.state.results}
                                    renderItem={({item}) => this.renderLine(item)}
                                />
                            :
                                <Text>No results</Text>
                        )

                    :  <View style={{flex: 1, padding: 50}}>
                            <ActivityIndicator size="large" color="#0000ff" />
                        </View>)
                }
            </View>
        );
    }
}