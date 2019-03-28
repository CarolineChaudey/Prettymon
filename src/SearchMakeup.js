import React, {Component} from 'react';
import { View, Text } from 'react-native';
import MakeupSelectors from './MakeupSelectors';

export default class SearchMakeup extends Component {
    constructor(props) {
        super(props);
        this.tagChanged = this.tagChanged.bind(this);
        this.brandChanged = this.brandChanged.bind(this);
        this.state = {
            tag: undefined,
            brand: undefined
        };
    }

    tagChanged(newTag) {
        this.setState({
            tag: newTag
        });
    }

    brandChanged(newBrand) {
        this.setState({
            brand: newBrand
        });
    }

    render() {
        return (
            <View>
                <MakeupSelectors
                    onTagChange={this.tagChanged}
                    onBrandChange={this.brandChanged}
                />
                <Text>{this.state.tag || 'no tag'}</Text>
                <Text>{this.state.brand || 'no brand'}</Text>
            </View>
        );
    }
}