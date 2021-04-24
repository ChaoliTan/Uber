import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const HomeMap = () => {
    const {height, width} = Dimensions.get('window');
    const LATITUDE_DELTA = 0.03; // zoom level
    const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

    const origin = {latitude: 28.451627, longitude: -16.263045};
    const destination = {latitude: 28.453512, longitude: -16.262729};

    return (
        // <View style={styles.container}>
        <MapView
            style={{width: '100%', height: '100%'}}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            showsUserLocation={true}
            region={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }}>
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={'AIzaSyDX0rNKcUIjZnTu2VBFDiKLkbwkE9o6MFI'}
                strokeWidth={5}
                strokeColor="black"
            />
            <Marker coordinate={origin} title={'Origin'} />
            <Marker coordinate={destination} title={'Destination'} />
        </MapView>
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
