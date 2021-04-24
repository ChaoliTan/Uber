import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import HomeMap from '../../components/HomeMap';
import CovidMessages from '../../components/CovidMessages';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => (
    <View>
        <View style={{height: Dimensions.get('window').height - 400}}>
            <HomeMap />
        </View>

        {/* Covid Msg */}
        <CovidMessages />

        {/* Learn More */}
        <HomeSearch />
    </View>
);

export default HomeScreen;

const styles = StyleSheet.create({});
