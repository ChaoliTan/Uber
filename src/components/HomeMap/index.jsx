import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const HomeMap = () => {
    return (
        // <View style={styles.container}>
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={{width: '100%', height: '100%'}}
            region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}></MapView>
        // </View>
    );
};

export default HomeMap;

const styles = StyleSheet.create({
    container: {
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
});
