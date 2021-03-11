import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function lab1() {
  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', backgroundColor: '#505050' }}>
    <Slider
      value={value}
      onValueChange={setValue}
      maximumValue={50}
      minimumValue={20}
      step={1}
      trackStyle={{ height: 10, backgroundColor: 'transparent' }}
      thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
      thumbProps={{
    }}
  />
  <Text>Value: {this.state.value}</Text>
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