import React, { useState } from 'react';
import { StyleSheet,Text,View, Pressable } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color } from 'react-native-reanimated';


export const LongPress = props =>{
    const [oldText,SetText] = useState("Зажми")


    return(
        <Pressable onLongPress={() => SetText("Меня долго нажимали")} delayLongPress={5000} style={styles.Pressable} android_ripple={{color:"#FFF"}}>
            <Text style={{color:"#FFF", fontSize:16,}}>{oldText}</Text>
        </Pressable>
    )
}

styles = StyleSheet.create({
    Pressable:{
        borderWidth:2,
        backgroundColor:"#000",
        justifyContent:"center",
        alignItems:"center",
        width:"50%",
    }
})