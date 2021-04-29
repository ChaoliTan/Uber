import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, TextInput, View, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';

const DestinationSearch = () => {
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    const homePlace = {
        description: 'Home',
        geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
    };
    const workPlace = {
        description: 'Work',
        geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder="From where"
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        setOriginPlace({data, details});
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    currentLocation={true}
                    currentLocationLabel="Current location"
                    styles={{
                        textInput: styles.textInput,
                        container: styles.autocompleteContainer,
                        listView: styles.listView,
                        separator: styles.separator,
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyDX0rNKcUIjZnTu2VBFDiKLkbwkE9o6MFI',
                        language: 'en',
                    }}
                    renderRow={data => <PlaceRow data={data} />}
                    renderDescription={data =>
                        data.description || data.vicinity
                    }
                    predefinedPlaces={[homePlace, workPlace]}
                />

                <GooglePlacesAutocomplete
                    placeholder="Where to?"
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        setDestinationPlace({data, details});
                    }}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container: {...styles.autocompleteContainer, top: 55},
                        separator: styles.separator,
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyDX0rNKcUIjZnTu2VBFDiKLkbwkE9o6MFI',
                        language: 'en',
                    }}
                />

                {/* Circle near Origin input */}
                <View style={styles.circle} />

                {/* Line between dots */}
                <View style={styles.line} />

                {/* Square near Destination input */}
                <View style={styles.square} />
            </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',
    },
    textInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft: 20,
    },
    autocompleteContainer: {
        position: 'absolute',
        top: 0,
        left: 10,
        right: 10,
    },
    separator: {
        backgroundColor: '#efefef',
        height: 1,
    },
    listView: {
        position: 'absolute',
        top: 105,
    },
    circle: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 20,
        left: 15,
        borderRadius: 5,
    },
    line: {
        width: 1,
        height: 50,
        backgroundColor: '#c4c4c4',
        position: 'absolute',
        top: 28,
        left: 17,
    },
    square: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 80,
        left: 15,
    },
});
