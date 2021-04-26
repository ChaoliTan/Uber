/* eslint-disable react/jsx-filename-extension */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import DestinationSearch from './src/screens/DestinationSearch';
import HomeScreen from './src/screens/HomeScreen';
import SearchResults from './src/screens/SearchResults';

navigator.geolocation = require('@react-native-community/geolocation');

const App = () => {
    const androidPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Uber App Camera Permission',
                    message:
                        'Uber App needs access to your location ' +
                        'so you can take awesome rides.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the location');
            } else {
                console.log('Location permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    useEffect(() => {
        if (Platform.OS === 'android') {
            androidPermission();
        } else {
            // IOS
            Geolocation.requestAuthorization();
        }
    }, []);

    return (
        <>
            {/* <HomeScreen /> */}
            <DestinationSearch />
            {/* <SearchResults /> */}
        </>
    );
};
export default App;
