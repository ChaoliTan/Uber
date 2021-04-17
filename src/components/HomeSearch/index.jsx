import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
        <AntDesign />
        <Image />
      </View>
      <Text>Spin Nightclub</Text>
    </View>

    {/* home destination */}
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
});
