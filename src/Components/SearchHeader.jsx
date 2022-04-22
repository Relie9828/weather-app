import { View, Text, TextInput, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { Icon } from '@ui-kitten/components';

export default function SearchHeader ({ navigation }) {

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    return (
        <View style={{ 
            shadowOffset: { width: 0, height: 1, },
            justifyContent: 'flex-end',
            backgroundColor: 'white', 
            alignItems: 'center',
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 3,
            width: deviceWidth,
            elevation: 2,
            height: 110, 
            padding: 10,
        }}>
            <View style={{ 
                borderRadius: 13,
                overflow: 'hidden',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor:'rgba(4, 4, 4, 0.03)',
            }}>
                <Icon name='search' fill='lightgray' height={25} width={35} />
                <TextInput placeholder='Search' placeholderTextColor={'lightgray'}
                style={{ fontSize: 18, width: '85%', padding: 5, height: 45 }} />
            </View>
        </View>
    )
}