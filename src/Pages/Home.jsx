import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import SearchHeader from '../Components/SearchHeader';
import ContentTitle from '../Components/ContentTitle';
import WeatherContent from '../Components/WeatherContent';

export default function Home ({ navigation }) {

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    const data = [
        {id: '1', location: 'Gaithersburg', temperature: 67, weather: 'Sunny' },
        {id: '2', location: 'Germantown', temperature: 69, weather: 'Rainy' },
        {id: '3', location: 'Rockville', temperature: 72, weather: 'Cloudy' },
        {id: '4', location: 'Bethesda', temperature: 70, weather: 'Heavy rain' },
        {id: '5', location: 'Frederick', temperature: 67, weather: 'Storm' },
        {id: '6', location: 'Clarksburg', temperature: 68, weather: 'Sunny' },
    ]

    const Header = ({item}) => {
        return (
            <ContentTitle />
        )
    }

    const Items = ({item}) => {
        return (
            <View>
                <WeatherContent location={item.location} temperature={item.temperature} weather={item.weather} />
            </View>
        )
    }

    return (
        <View style={{ height: deviceHeight, width: deviceWidth, alignItems: 'center', justifyContent: 'flex-start', }}>
            <SearchHeader />
            <View style={{ flex: 1, }}>
                <FlatList contentContainerStyle={{ marginTop: 20, paddingBottom: 40, }} 
                data={data} showsVerticalScrollIndicator={false}
                ListHeaderComponent={Header}
                renderItem={Items} />
             </View>
        </View>
    )
}