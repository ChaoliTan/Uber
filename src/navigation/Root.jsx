import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeNavigator from './Home';
import CustomeDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DummyScreen = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{props.name}</Text>
        </View>
    );
};

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={props => <CustomeDrawer {...props} />}>
                <Drawer.Screen name="Home" component={HomeNavigator} />
                <Drawer.Screen name="Your trips">
                    {() => <DummyScreen name="Your trips" />}
                </Drawer.Screen>
                <Drawer.Screen name="Help">
                    {() => <DummyScreen name="Help" />}
                </Drawer.Screen>
                <Drawer.Screen name="Wallet">
                    {() => <DummyScreen name="Wallet" />}
                </Drawer.Screen>
                <Drawer.Screen name="Settings">
                    {() => <DummyScreen name="Settings" />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
