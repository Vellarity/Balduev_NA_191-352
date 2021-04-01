import React from 'react'; //Основной файл со всеми страницами свайпов
import { StyleSheet, View, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Собственные модули. Потом объединить в один файл для простоты.
import { MyVideo } from './camerafilms/Video.js';
import MyCamera from './camerafilms/Camera.js' 
import CustomMarker,{MySlider, MyTumbler, MyBox, MyBar, LongPress} from './elements/All.js';
import {MyRequest} from './request/MyRequest.js';


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
            selectedStyle={{ backgroundColor: '#7289DA', }}
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

const miniTab = createBottomTabNavigator();

//Вторая страница с видео и камерой
function lab2() {
  return (
    <miniTab.Navigator tabBarOptions={{labelStyle: {fontSize: 25, textAlign:"center"}, }} lazy lazyPreloadDistance={0} swipeEnabled={false} tabBarPosition='top'>
      <miniTab.Screen name="Video" component={MyVideo} />
      <miniTab.Screen name="Camera" component={MyCamera} />
    </miniTab.Navigator>
  );
}

function lab3() {
  
  return (
    <View style={{ flex: 1, width:"100%" }}>
      <MyRequest/>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

//Само приложение со свайп-навигатором 
export default function App() {
  

  return (
    <NavigationContainer theme={MyTheme}>
      <View style={{backgroundColor:"#23272A", flexDirection:"row"}}>
      <Image
        source={require('./assets/discord.png')}
        fadeDuration={0}
        style={{ width: 150, height: 50, marginTop:15 }}
      />
      </View>
      <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 25, textAlign:"center"}}} tabBarPosition={'bottom'}>
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
    primary: 'rgb(114, 137, 218)',
    background: 'rgb(53,56,62)',
    text: 'rgb(114, 137, 218)',
    card: 'rgb(35, 39, 42)',
    border: 'rgb(35, 39, 42)',
    notification: 'rgb(255, 69, 58)',
  },

};