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
        });
        this.searchResults();
    }

    brandChanged(newBrand) {
        this.setState({
            brand: newBrand
        });
        this.searchResults();
    }

    searchResults() {
        fetch(apiData.baseUrl)
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