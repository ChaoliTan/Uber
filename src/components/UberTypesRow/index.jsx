import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UberXIcon = require('../../assets/images/UberX.jpeg');

const UberTypesRow = () => (
  <View style={styles.container}>
    {/* Image */}
    <Image style={styles.image} source={UberXIcon} />
    <View style={styles.middleContainer}>
      <Text style={styles.type}>
        UberX
        <Ionicons name="person" size={12} />
        3
      </Text>
      <Text style={styles.time}>
        8:03PM drop off
      </Text>
    </View>
    <View style={styles.rightContainer}>
      <Ionicons name="pricetab" size={18} color="#42d742" />
      <Text style={styles.price}>
        est. 42
      </Text>
    </View>
  </View>
);

export default UberTypesRow;

const styles = StyleSheet.create({
  container: {

  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  middleContainer: {

  },
  type: {

  },
  time: {

  },
  rightContainer: {

  },
  price: {

  },
});
