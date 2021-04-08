import React, { useState } from 'react';
import { Button } from 'react-native';
import { Text, View, ScrollView } from 'react-native';
import { authorize } from 'react-native-app-auth'

export const MyAuth = props =>{
        const [auth,setAuth] = useState()

        const config = {
                clientId: '829616220814573579',
                clientSecret: '2rHUnlq1yfUlpVCk6g8LL5vIIW1W9Jhc',
                redirectUrl: 'BUNDLE_IDENTIFIER://oauthredirect',
                scopes: ['email', 'identify'],
                serviceConfiguration: {
                  authorizationEndpoint: 'https://discordapp.com/api/oauth2/authorize',
                  tokenEndpoint: 'https://discordapp.com/api/oauth2/token',
                  revocationEndpoint: 'https://discordapp.com/api/oauth2/token/revoke'
                }
        }

        const loginDiscord = async() => {
        try {
                const authResult = await authorize(config)
                setAuth(authResult)     
                } catch (error) {
                      console.log(error)  
                } 
        }
        return(
                <View style={{flex:1}}>
                        <Button title="LoGin" onPress={loginDiscord} color="#7289DA" />
                        
                </View>
        )
}