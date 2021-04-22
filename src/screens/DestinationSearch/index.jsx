import React, { useState } from 'react';
import {
  StyleSheet, SafeAreaView, TextInput, View,
} from 'react-native';

const DestinationSearch = () => {
  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput value={fromText} onChangeText={setFromText} style={styles.textInput} placeholder="From" />
        <TextInput value={destinationText} onChangeText={setDestinationText} style={styles.textInput} placeholder="Where to" />
      </View>
    </SafeAreaView>

  );
};

export default DestinationSearch;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
});
