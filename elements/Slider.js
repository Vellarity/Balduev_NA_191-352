import React from 'react';
import { StyleSheet } from 'react-native';
import { Slider } from 'react-native-elements';

export const MySlider = props => {
    return(
            <Slider 
                style={ styles.MySlider }
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