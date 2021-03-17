import React, {useEffect, useState} from 'react'; //На данный момент просто неактивный Слайдер, активность можно добавить при необходимости.
import { StyleSheet,Text,View,} from 'react-native';
import { Slider } from 'react-native-elements';


export const MyBar = props => {
    return(
            <Slider 
                style={ styles.MySlider }
                value={50}
                disabled={true}
                minimumValue={0}
                maximumValue={100}
                thumbStyle={{ height: 0, width: 0, backgroundColor: 'transparent'  }} 
                trackStyle={{ height: 4, backgroundColor: '#FB2D2D' }}
                minimumTrackTintColor={"#242424"}
            />

    );
}

const styles = StyleSheet.create({
    MySlider:{
        width:'100%'
    }
})