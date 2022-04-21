import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import SearchHeader from '../Components/SearchHeader';
import ContentTitle from '../Components/ContentTitle';
import WeatherContent from '../Components/WeatherContent';

export default function Home ({ navigation }) {

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    const data = [
        {id: '1', location: 'Gaithersburg', temperature: 70, },
        {id: '2', location: 'Germantown', temperature: 70, },
        {id: '3', location: 'Rockville', temperature: 72, },
        {id: '4', location: 'Bethesda', temperature: 68, },
        {id: '5', location: 'Frederick', temperature: 65, },
    ]

    const Header = ({item}) => {
        return (
            <ContentTitle />
        )
    }

    const Items = ({item}) => {
        return (
            <WeatherContent location={item.location} temperature={item.temperature} />
        )
    }

    return (
        <View style={{ height: deviceHeight, width: deviceWidth, alignItems: 'center', justifyContent: 'flex-start', }}>
            <SearchHeader />
            <FlatList contentContainerStyle={{ marginTop: 25, width: deviceWidth }} 
            data={data}
            ListHeaderComponent={Header}
            renderItem={Items}
             />
        </View>
    )
}