import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import * as ScreenOrientation from 'expo-screen-orientation';


import {MySlider} from '../AndroidDev/elements/Slider.js';
import {MyTumbler} from '../AndroidDev/elements/Tumbler.js';
import {MyBox} from '../AndroidDev/elements/NewBox.js';
//import {MyBar} from '../AndroidDev/elements/Progress.js'


function lab1() {
  return (
    <View style = {styles.lab1}>
      <View style={ styles.slideView }>
        <MySlider />
      </View>
      <View style = {styles.lab1}>
        <MyTumbler />
      </View>
      <View style = {styles.lab1}>
        <MyBox />
      </View>
      <View>
      </View>
    </View>
  );
}

function lab2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>lab2</Text>
    </View>
  );
}

function lab3() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>lab3</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme} style = {styles.navtext}>
      <Tab.Navigator tabBarOptions={{labelStyle: { fontSize: 20 }}}>
        <Tab.Screen name="lab1" component={lab1} />
        <Tab.Screen name="lab2" component={lab2} />
        <Tab.Screen name="lab3" component={lab3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navtext:{
    fontSize: 20,
  },
  slideView: {
    flex:1,
    flexDirection: 'row',
    alignItems: "flex-start",
    justifyContent:"center",
  },
  lab1:{
    marginVertical:30,
    marginHorizontal:20,

  }
});

const MyTheme = {
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(255, 45, 85)',
    text: 'rgb(255, 45, 85)',
    card: 'rgb(0, 0, 0)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },

};