import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';

export default function ContentTitle ({ navigation }) {

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    return (
        <View style={{
            width: '90%',
            borderRadius: 7,
            marginVertical: 10, 
            alignSelf: 'center',
            alignItems: 'flex-start',
            justifyContent: 'center', 
        }}>
            <Text style={{ fontSize: 28, color: 'lightgray', }}>
                Today
            </Text>
        </View>
    )
}