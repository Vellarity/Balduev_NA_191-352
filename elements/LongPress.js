import React, { useState } from 'react';
import { StyleSheet,Text, Pressable } from 'react-native';


export const LongPress = props =>{
    const [oldText,SetText] = useState("Зажми")
                                                //Pressable выcтупает в роли DelayButton
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