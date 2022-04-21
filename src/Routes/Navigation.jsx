import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const HomeStack = createStackNavigator()
export default function Navigation ({ navigation }) {

    return (
        <HomeStack.Navigator initialRouteName='home'>
          <HomeStack.Screen name='home' 
          children={(props) => <Home {...props} /> }
          options={{ headerShown: false, gestureEnabled: true, }} />
        </HomeStack.Navigator>
    )
}
