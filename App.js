import { ApplicationProvider, IconRegistry, } from '@ui-kitten/components';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState, useRef } from 'react';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Navigations from './src/Routes/Navigation';
import * as eva from '@eva-design/eva';

export default function App ({ navigation }) {

  const TRANSITIONS = 'fade';
  const STYLES = 'light-content';

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <IconRegistry icons={EvaIconsPack} />
      <NavigationContainer>
        <StatusBar barStyle={STYLES} animated={true} showHideTransition={TRANSITIONS} />
        <Navigations />
      </NavigationContainer>
    </ApplicationProvider>
  )
}
