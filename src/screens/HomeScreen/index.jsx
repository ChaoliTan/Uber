import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import HomeMap from '../../components/HomeMap';
import CovidMessages from '../../components/CovidMessages';
import HomeSearch from '../../components/HomeSearch'

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />
      {/* Covid Msg */}
      <CovidMessages />
      {/* Learn More */}
      <HomeSearch></HomeSearch>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});
