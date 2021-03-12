import React, {useState} from 'react';
import { StyleSheet,Text,View, } from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';

export const MyBar = props =>{
    return(
        <View>
            <ProgressBar 
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.5}
            />
        </View>
    )
}