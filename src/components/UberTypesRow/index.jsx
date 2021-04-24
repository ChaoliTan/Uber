import React from 'react';
import {
    StyleSheet, Text, View, Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

/* global require */
const icons = {
    UberX: require('../../assets/images/UberX.jpeg'),
    Comfort: require('../../assets/images/Comfort.jpeg'),
    UberXL: require('../../assets/images/UberXL.jpeg'),
};

const UberTypesRow = (props) => {
    const { type: { type, price } } = props;
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image style={styles.image} source={icons[type]} />
            <View style={styles.middleContainer}>
            <Text style={styles.type}>
                    {type}
                    {' '}
                    <Ionicons name="person" size={16} />
                  3
              </Text>
                <Text style={styles.time}>
                8:03PM drop off
                </Text>
          </View>
            <View style={styles.rightContainer}>
                <Ionicons name="pricetag" size={18} color="#42d742" />
                <Text style={styles.price}>
                est. $
                    {price}
              </Text>
          </View>
      </View>
    );
};

export default UberTypesRow;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    type: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    time: {

    },
    rightContainer: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,
    },
});
