import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { Icon } from '@ui-kitten/components';

export default function WeatherContent ({ navigation, location, temperature }) {

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    return (
        <View style={{ 
            shadowOffset: { width: 0, height: 1 },
            backgroundColor: 'whitesmoke',
            alignItems: 'flex-start',
            justifyContent: 'center', 
            alignSelf: 'center',
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 2,
            borderRadius: 10,
            marginBottom: 10, 
            padding: 10,
            width: '90%',

            elevation: 2,
        }}>
            <Text style={{ fontSize: 16, }}>
                {location}
            </Text>
            <View style={{ width: '100%', padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <Icon name='activity' fill='black' width={20} height={20} />

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontSize: 20, }}>
                        {temperature}
                    </Text>
                    <Icon name='activity' fill='black' width={20} height={20} />
                </View>
            </View>
        </View>
    )
}