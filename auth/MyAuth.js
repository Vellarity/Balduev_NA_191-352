import React, { useState } from 'react';
import { Button } from 'react-native';
import { Text, View, ScrollView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, Prompt, ResponseType, useAuthRequest, useProxy} from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession()

export const MyAuth = props =>{
        const [auth,setAuth] = useState('SUS')
        const [par,setPar] = useState('Sas ')
        
        const discovery = {
                authorizationEndpoint: 'https://accounts.spotify.com/authorize',
                tokenEndpoint: 'https://accounts.spotify.com/api/token',
              };
              

        const [request, response, promptAsync] = useAuthRequest(
                {
                responseType: ResponseType.Token,
                clientId: '39ba9874ac164ed8973afe03b301992b',
                scopes: ['user-read-email', 'playlist-modify-public', 'user-library-read'],
                usePKCE: false,
                redirectUri: makeRedirectUri({scheme:"myapp://lab4"}),
                prompt: Prompt.Login,
                extraParams:{
                        show_dialog:true,
                }
                },
                discovery
        );
        
        React.useEffect(() => {
                if (response?.type === 'success') {
                        const { access_token } = response.params;
                        setAuth(access_token)
                        const storeData = async () => {
                                try {
                                await AsyncStorage.setItem('@Token', access_token)
                                } catch (error) {
                                console.log(error)
                                }
                        }
                        storeData()
                        const getData = async () => {
                                try {
                                  const value = await AsyncStorage.getItem('@Token')
                                  if(value !== null) {
                                        console.log(value)
                                  }
                                } catch(e) {
                                  console.log(e)
                                }
                        } 
                        getData()
                } 
        }, [response]);

        
        

        return(
                <View style={{flex:1}}>
                        <Button title="Login" onPress={() =>{promptAsync()}} color="#191414" /> 
                        <Text style={{color:"#FFF", textAlign:"center", fontSize:20, fontWeight:"bold"}}>{auth}</Text>
                </View>
        )
}