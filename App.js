import React from 'react'; //Основной файл со всеми страницами свайпов
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

//Собственные модули. Потом объединить в один файл для простоты.
import {MySlider} from './elements/Slider.js';
import {MyTumbler} from './elements/Tumbler.js';
import {MyBox} from './elements/NewBox.js';
import {MyBar} from './elements/Progress.js';
import {LongPress} from './elements/LongPress.js';
import CustomMarker from "./elements/MyCont";
import { MyVideo } from './camerafilms/Video.js';

//Первая страница свайпа с элементами
function lab1() {
  const [multiSliderValue, setMultiSliderValue] = React.useState([30, 70]);

  return (
    <View style={{ flex: 1, justifyContent: 'space-between'}}>
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

//Вторая страница с видео и камерой
function lab2() {
  return (
    <View style={styles.all,{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <MyVideo />
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

const Tab = createMaterialTopTabNavigator();

//Само приложение со свайп-навигатором 
export default function App() {
  

  return (
    <NavigationContainer theme={MyTheme}>
      <View style={{backgroundColor:"#000"}}>
        <Text style={{color:"#FFF", fontSize:30, textAlign:"center" ,marginTop:5}}>Balduev N A</Text>
      </View>
      <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 25, textAlign:"center"}}} tabBarPosition={'bottom'} >
        <Tab.Screen name="lab1" component={lab1} />
        <Tab.Screen name="lab2" component={lab2} />
        <Tab.Screen name="lab3" component={lab3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//Стили
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