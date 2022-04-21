import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';

export default function Home ({ navigation }) {

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    return (
        <View style={{ height: deviceHeight, width: deviceWidth, alignItems: 'center', justifyContent: 'center', }}>
            <Text>Home</Text>
        </View>
    )
}