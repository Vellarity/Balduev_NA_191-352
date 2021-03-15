import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {MySlider} from '../AndroidDev/elements/Slider.js';
import {MyTumbler} from '../AndroidDev/elements/Tumbler.js';
import {MyBox} from '../AndroidDev/elements/NewBox.js';
import {MyBar} from '../AndroidDev/elements/Progress.js'
import {LongPress} from '../AndroidDev/elements/LongPress.js'
import CustomMarker from "../AndroidDev/elements/MyCont"


function lab1() {
  const [multiSliderValue, setMultiSliderValue] = React.useState([30, 70]);

  return (
    <View style={{ flex: 1, justifyContent: 'space-between'}}>
      <View style={{backgroundColor:"#000"}}>
        <Text style={{color:"#FFF", fontSize:30, textAlign:"center" ,marginTop:5}}>Balduev N A</Text>
      </View>
      <View style={styles.all}>
        <View>
          <MySlider />
        </View>
        <View style={{alignItems:"center"}}>
          <MultiSlider 
            selectedStyle={{ backgroundColor: 'black', }}
            containerStyle={{height: 40,}}
            trackStyle={{height: 5, borderRadius:5}}
            unselectedStyle={{backgroundColor: 'silver',}}
            values={[multiSliderValue[0], multiSliderValue[1]]}
            sliderLength={300}
            onValuesChange={() => setMultiSliderValue(multiSliderValue)}
            min={0}
            max={100}
            step={1}
            allowOverlap
            allowOverlap
            customMarker={CustomMarker}
          />
        </View>
        <View>
          <MyTumbler />
        </View>
        <View style = {{flexDirection:"row", justifyContent:"space-around"} }>
          <LongPress />
          <MyBox />
        </View>
        <View>
          <MyBar />
        </View>
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

//const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {
  

  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 25, textAlign:"center"}}} tabBarPosition={'bottom'} >
        <Tab.Screen name="lab1" component={lab1} />
        <Tab.Screen name="lab2" component={lab2} />
        <Tab.Screen name="lab3" component={lab3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  all:{
    marginHorizontal:20,
    justifyContent:"space-between",
    flex:1
  },
});

const MyTheme = {
  colors: {
    primary: 'rgb(178, 242, 136)',
    background: 'rgb(178, 242, 136)',
    text: 'rgb(178, 242, 136)',
    card: 'rgb(0, 0, 0)',
    border: 'rgb(0, 0, 0)',
    notification: 'rgb(255, 69, 58)',
  },

};