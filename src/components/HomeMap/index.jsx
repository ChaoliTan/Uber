import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import cars from '../../assets/data/cars';

/* global require */
const icons = {
    UberX: require('../../assets/images/top-UberX.png'),
    Comfort: require('../../assets/images/top-Comfort.png'),
    UberXL: require('../../assets/images/top-UberXL.png'),
};

const HomeMap = () => {
    const {height, width} = Dimensions.get('window');
    const LATITUDE_DELTA = 0.28; // zoom level
    const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

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
            {cars.map(item => {
                return (
                    <Marker
                        key={cars.id}
                        coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                        }}>
                        <Image
                            source={icons[item.type]}
                            style={{
                                height: 70,
                                width: 70,
                                resizeMode: 'contain',
                            }}
                        />
                    </Marker>
                );
            })}
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
