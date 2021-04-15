import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const index = () => {
  return (
    <View>
      {/* input text */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#535353'}></AntDesign>
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16}></MaterialIcons>
        </View>
      </View>

      {/* previous destination */}

      {/* home destination */}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#d9d9d9',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#6e6e6e'
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
