import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { Icon } from '@ui-kitten/components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { 
    faSun,
    faCloud,
    faCloudSun,
    faCloudBolt,
    faCloudShowersHeavy,
} from '@fortawesome/free-solid-svg-icons';

export default function WeatherContent ({ navigation, location, temperature, weather }) {

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    const icons = [ faCloud, faSun, faCloudBolt, faCloudSun, faCloudShowersHeavy]
    const [icon , setIcon] = useState(icons[0])

    var check;
    useEffect(() => {
        check = setInterval(() => {
            setIcon(icons[2])
        }, 1000)
        if( weather === 'Sunny' ) {
            setIcon(icons[1])
        }
        if( weather === 'Rainy' ) {
            setIcon(icons[4])
        }
        if( weather === 'Cloudy' ) {
            setIcon(icons[3])
        }
        if( weather === 'Heavy rain' ) {
            setIcon(icons[2])
        }
        if( weather === 'Storm' ) {
            setIcon(icons[2])
        } 
        return () => clearInterval(check)
    });

    return (
        <View style={{ 
            shadowOffset: { width: 0, height: 1 },
            backgroundColor: 'whitesmoke',
            alignItems: 'flex-start',
            justifyContent: 'center', 
            alignSelf: 'center',
            shadowColor: "#000",
            shadowOpacity: 0.08,
            borderRadius: 10,
            marginBottom: 10, 
            shadowRadius: 2,
            padding: 10,
            width: '90%',

            elevation: 2,
        }}>
            <Text style={{ fontSize: 16, }}>
                {location}
            </Text>
            <View style={{ width: '100%', padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <View style={{ alignItems: 'center', marginLeft: -5, width: 60, }}>
                    <FontAwesomeIcon size={28} icon={icon} color='black' />
                    <Text style={{ fontSize: 10, }}>
                        {weather}
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontSize: 20, }}>
                        {temperature} ºF
                    </Text>
                </View>
            </View>
        </View>
    )
}