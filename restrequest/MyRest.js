import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const MyApi = props =>{
        const [token, setToken] = useState('')

        useEffect(() => {
                const getToken = async () => {
                        try {
                                const value = await AsyncStorage.getItem('@Token')
                                if(value !== null) {
                                        console.log(value)
                                        setToken(value)
                                }
                        } catch(e) {
                                console.log(e)
                        }
                } 
                getToken()
                const getList = async() =>{
                        try {
                                const List = await fetch("https://api.spotify.com/v1/me/tracks", {
                                        headers:{
                                                'Authorization':'Bearer ' + token
                                        }
                                })
                                const getList = await List.json()
                                console.log(getList)
                        } catch (error) {
                                console.log(error)
                        }
                }
                getList()
        },[])


        return(
                <View>

                </View>
        )
}