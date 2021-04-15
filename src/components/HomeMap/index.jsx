import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeMap = () => {
  return (
    <View style={styles.container}>
      <Text>I am a dummy map</Text>
    </View>
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