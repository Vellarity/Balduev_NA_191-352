import React, { useState } from 'react';
import { StyleSheet,Text, Pressable, Image, View, ScrollView, Switch } from 'react-native';
import Checkbox from 'expo-checkbox'; //Модуль Чекбокса
import { Slider, Icon } from 'react-native-elements';


export const LongPress = props =>{
    const [oldText,SetText] = useState("Зажми")
                                                //Pressable выcтупает в роли DelayButton
    return(
        <Pressable onLongPress={() => SetText("Меня долго нажимали")} delayLongPress={5000} style={styles.Pressable} android_ripple={{color:"#FFF"}}> 
            <Text style={{color:"#FFF", fontSize:16,}}>{oldText}</Text>
        </Pressable>
    )
}

class CustomMarker extends React.Component {
    render() {
      return (
         /* <Image
          style={styles.image}
          source={require('../assets/treu.png')}
          resizeMode="contain"
        /> */
        <Icon
            marginTop={5}
            name="ellipse"
            type='ionicon'
            color="#191414"
        />
      );
    }
  }
  
  export default CustomMarker;

  export const MyBox = props => {
    const [isChecked, setChecked] = useState(false);

    return(
        <View style={{flexDirection:'row', justifyContent:"space-evenly", alignItems:"center"}}>
            <Text style={{ fontSize:20, color:"#FFF" }}>CheckBox</Text>
            <Checkbox 
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#191414' : "#FFF"}
            />
        </View>
    )
}

export const MyBar = props => {
    const [value, SetValue] = useState(0)

    return(
            <Slider 
                style={ styles.MySlider }
                value={50}
                //onSlidingComplete={StartBar}
                disabled={true}
                minimumValue={0}
                maximumValue={100}
                thumbStyle={{ height: 0, width: 0, backgroundColor: 'transparent'  }} 
                trackStyle={{ height: 4, backgroundColor: '#191414' }}
                minimumTrackTintColor={"#191414"}
            />

    );
}

export const MySlider = props => {
    return(
            <Slider 
                style={ styles.MySlider }
                thumbStyle={{ height: 0, width: 0, backgroundColor: 'transparent'  }} 
                trackStyle={{ height: 4, backgroundColor: '#191414' }}
                minimumTrackTintColor={"#191414"}
            />
    );
}

export const MyTumbler = props =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }
    return(
        <View style={ styles.View }>
            <View style={{flexDirection:"row", justifyContent:"space-evenly" , borderBottomColor:"#FFF" , borderBottomWidth:2}}>
                <ScrollView style={styles.ScrollView} pagingEnabled={true} showsVerticalScrollIndicator={false}>
                    <Text style= {styles.FirstText}>0</Text>
                    <Text style= {styles.FirstText}>1</Text>
                    <Text style= {styles.FirstText}>2</Text>
                    <Text style= {styles.FirstText}>3</Text>
                    <Text style= {styles.FirstText}>4</Text>
                    <Text style= {styles.FirstText}>5</Text>
                    <Text style= {styles.FirstText}>6</Text>
                    <Text style= {styles.FirstText}>7</Text>
                    <Text style= {styles.FirstText}>8</Text>
                    <Text style= {styles.FirstText}>9</Text>
                    <Text style= {styles.FirstText}>10</Text>
                    <Text style= {styles.FirstText}>11</Text>
                    <Text style= {styles.FirstText}>12</Text>
                </ScrollView>
                <Text style= {styles.Text}>:</Text>
                <ScrollView style={styles.ScrollView} pagingEnabled={true} showsVerticalScrollIndicator={false}>
                    <Text style= {styles.Text}>0</Text>
                    <Text style= {styles.Text}>1</Text>
                    <Text style= {styles.Text}>2</Text>
                    <Text style= {styles.Text}>3</Text>
                    <Text style= {styles.Text}>4</Text>
                    <Text style= {styles.Text}>5</Text>
                </ScrollView>
                <ScrollView style={styles.ScrollView} pagingEnabled={true} showsVerticalScrollIndicator={false}>
                    <Text style= {styles.Text}>0</Text>
                    <Text style= {styles.Text}>1</Text>
                    <Text style= {styles.Text}>2</Text>
                    <Text style= {styles.Text}>3</Text>
                    <Text style= {styles.Text}>4</Text>
                    <Text style= {styles.Text}>5</Text>
                    <Text style= {styles.Text}>6</Text>
                    <Text style= {styles.Text}>7</Text>
                    <Text style= {styles.Text}>8</Text>
                    <Text style= {styles.Text}>9</Text>
                </ScrollView>
                <ScrollView pagingEnabled={true} style={styles.ScrollView} disableIntervalMomentum={true} showsVerticalScrollIndicator={false}>
                    <Text style= {styles.Text}>AM</Text>
                    <Text style= {styles.Text}>PM</Text>
                </ScrollView>
            </View>
            <Switch 
                style={{marginVertical:10,}}
                onValueChange={toggleSwitch}
                value={isEnabled}
                trackColor={{false:"#FFF", true:"#191414"}}
                thumbColor={"#191414"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    Pressable:{
        borderWidth:2,
        backgroundColor:"#191414",
        borderColor:"#191414",
        justifyContent:"center",
        alignItems:"center",
        width:"50%",
    },
    image: {
        height: 25,
        width: 25,
        borderRadius:500,
        marginTop:3
    },
    checkbox: {
        margin: 8,
    },
    MySlider:{
        width:'100%'
    },

    View:{
        height:40,
        flexDirection:'row',
        justifyContent:"space-around",
        marginVertical:20
    },
    ScrollView:{
        height:40,
    },
    Text:{
        fontSize:40, 
        lineHeight:40,
        color:"#FFF"
    },
    FirstText:{
        fontSize:40,
        lineHeight:40, 
        marginRight:10, 
        textAlign:"right",
        color:"#FFF"
    }
})