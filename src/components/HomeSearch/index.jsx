import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeSearch = () => (
    <View>
        {/* input text */}
        <View style={styles.inputBox}>
            <Text style={styles.inputText}>Where to?</Text>
            <View style={styles.timeContainer}>
                <AntDesign name="clockcircle" size={16} color="#535353" />
                <Text>Now</Text>
                <MaterialIcons name="keyboard-arrow-down" size={16} />
            </View>
        </View>

        {/* previous destination */}
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <AntDesign name="clockcircle" size={20} color="#ffffff" />
            </View>
            <Text style={styles.destinationText}>Spin Nightclub</Text>
        </View>

        {/* home destination */}
        <View style={styles.row}>
            <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
                <Entypo name="home" size={20} color="#ffffff" />
            </View>
            <Text style={styles.destinationText}>Spin Nightclub</Text>
        </View>
    </View>
);

export default HomeSearch;

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#e7e7e7',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#434343',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: 'center',
        padding: 15,
        borderColor: '#b3b3b3',
    },
    iconContainer: {
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25,
    },
    destinationText: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 16,
        // backgroundColor: '#b3b3b3',
    },
});
