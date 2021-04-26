import React from 'react'; //Основной файл со всеми страницами свайпов
import { StyleSheet, View, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Linking from 'expo-linking';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Собственные модули. Потом объединить в один файл для простоты.
import { MyVideo } from './camerafilms/Video.js';
import MyCamera from './camerafilms/Camera.js' 
import CustomMarker,{MySlider, MyTumbler, MyBox, MyBar, LongPress} from './elements/All.js';
import {MyRequest} from './request/MyRequest.js';
import {MyAuth} from './auth/MyAuth.js';
import {MyApi} from './restrequest/MyRest.js';



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
            selectedStyle={{ backgroundColor: '#191414', }}
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

function lab4() {
  
  return (
    <View style={{ flex: 1, width:"100%" }}>
      <MyAuth/>
    </View>
  );
}

function lab5() {
  
  return (
    <View style={{ flex: 1, width:"100%" }}>
      <MyApi/>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

//Само приложение со свайп-навигатором 
export default function App() {
  const prefix = Linking.createURL('/');
  const linking = {
    prefixes: [prefix],
  };
  

  return (
    <NavigationContainer linking={linking} theme={MyTheme}>
      <View style={{backgroundColor:"#191414", flexDirection:"row", height:60}}>
      <Image
        source={require('./assets/Spotify_Logo.png')}
        fadeDuration={0}
        style={{ width: 130, height: 40, marginTop:15, marginLeft:10 }}
      />
      </View>
      <Drawer.Navigator drawerContentOptions={{labelStyle: {fontSize: 20, }}} lazy>
        <Drawer.Screen name="lab1" component={lab1} />
        <Drawer.Screen name="lab2" component={lab2} />
        <Drawer.Screen name="lab3" component={lab3} />
        <Drawer.Screen name="lab4" component={lab4} />
        <Drawer.Screen name="lab5" component={lab5} />
      </Drawer.Navigator>
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
    primary: 'rgb(30,215,96)',
    background: 'rgb(30,215,96)',
    text: 'rgb(30,215,96)',
    card: 'rgb(25,20,20)',
    border: 'rgb(35, 39, 42)',
    notification: 'rgb(255, 69, 58)',
  },

};