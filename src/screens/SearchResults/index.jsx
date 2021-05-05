import React from 'react';
import {View, Dimensions} from 'react-native';
import {useRoute} from '@react-navigation/native';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';

const SearchResults = () => {
    const route = useRoute();
    const {
        params: {originPlace, destinationPlace},
    } = route;

    return (
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
            <View style={{height: Dimensions.get('window').height - 400}}>
                <RouteMap
                    originPlace={originPlace}
                    destinationPlace={destinationPlace}
                />
            </View>
            <View style={{height: 400}}>
                <UberTypes />
            </View>
        </View>
    );
};

export default SearchResults;
