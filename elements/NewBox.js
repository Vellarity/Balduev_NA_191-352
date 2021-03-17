import Checkbox from 'expo-checkbox'; //Модуль Чекбокса
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const MyBox = props => {
    const [isChecked, setChecked] = useState(false);

    return(
        <View style={{flexDirection:'row', justifyContent:"space-evenly", alignItems:"center"}}>
            <Text style={{ fontSize:20 }}>CheckBox</Text>
            <Checkbox 
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#000000' : undefined}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    checkbox: {
      margin: 8,
    },
  });