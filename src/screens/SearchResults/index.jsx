import React from 'react';
import {View, Dimensions} from 'react-native';
import {useRoute} from '@react-navigation/native';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';

const SearchResults = () => {
    const route = useRoute();
    const {params} = route;
    console.warn(params);

    return (
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
            <View style={{height: Dimensions.get('window').height - 400}}>
                <RouteMap />
            </View>
            <View style={{height: 400}}>
                <UberTypes />
            </View>
        </View>
    );
};

export default SearchResults;
