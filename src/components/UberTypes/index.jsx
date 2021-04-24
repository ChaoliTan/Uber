import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import UberTypesRow from '../UberTypesRow';
import typesData from '../../assets/data/types';

const UberTypes = () => {
    const confirm = () => {};
    return (
        <View style={{height: '100%'}}>
            {typesData.map((type, i) => (
                <UberTypesRow type={type} key={i} />
            ))}
            <Pressable
                onPress={confirm}
                style={{
                    width: '100%',
                    backgroundColor: 'black',
                    padding: 10,
                    alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                    Confirm Uber
                </Text>
            </Pressable>
        </View>
    );
};

export default UberTypes;

const styles = StyleSheet.create({});
