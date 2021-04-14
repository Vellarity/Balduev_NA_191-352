import React, { useState } from 'react';
import { Button } from 'react-native';
import { Text, View, ScrollView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, Prompt, ResponseType, useAuthRequest, useProxy} from 'expo-auth-session';

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
                scopes: ['user-read-email', 'playlist-modify-public'],
                // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
                // this must be set to false
                usePKCE: false,
                redirectUri: makeRedirectUri({scheme:"myapp://lab4"}),
                prompt: Prompt.Login
                },
                discovery
        );
        
        React.useEffect(() => {
                if (response?.type === 'success') {
                const { access_token } = response.params;
                console.log(access_token)
                setAuth(access_token)
                }
        }, [response]);
        

        return(
                <View style={{flex:1}}>
                        <Button title="Login" onPress={() =>{promptAsync()}} color="#191414" /> 
                        <Text style={{color:"#FFF", textAlign:"center", fontSize:20, fontWeight:"bold"}}>{auth}</Text>
                </View>
        )
}


/* function generateRandomString(length) {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
                for (var i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                return text;
        }
        function generateCodeChallenge(code_verifier) {
                return base64URL(sha256(code_verifier))
        }
    
        function base64URL(string) {
                return string.toString(Base64).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
        }
        function generateCodeChallenge(codeVerifier) {
                const encoder = new TextEncoder();
                const data = encoder.encode(codeVerifier);
                const digest = CryptoJS.SHA256(data);
                console.log("digest  " + digest)
                const base64Digest = digest.toString(Base64);
                // you can extract this replacing code to a function
                return base64Digest
        } */

/* if (typeof Buffer === 'undefined') {
                global.Buffer = require('buffer').Buffer;
              }
              
              function base64URLEncode(str) {
                return str
                  .toString('base64')
                  .replace(/\+/g, '-')
                  .replace(/\//g, '_')
                  .replace(/=/g, '');
              }
              
        const createVerifierChallenge = () => {
                return new Promise(async (resolve, reject) => {
                  const randomBytes = await Random.getRandomBytesAsync(32);
                  const verifier = base64URLEncode(Buffer.from(randomBytes));
                  
              
                  const challengeBase64 = await Crypto.digestStringAsync(
                    Crypto.CryptoDigestAlgorithm.SHA256,
                    verifier,
                    { encoding: Crypto.CryptoEncoding.BASE64 }
                  );
                  const challenge = challengeBase64
                    .replace(/\+/g, '-')
                    .replace(/\//g, '_')
                    .replace(/=/g, '');
              
                  resolve([verifier, challenge]);
                });
              };
        async function getverch(){
                try {
                        const [verifier, challenge] = await createVerifierChallenge();
                        setCode([verifier,challenge])
                        console.log(code_ver, code_chel)
                } catch (error) {
                        console.log(error)
                }
        } */

        /* const options = {
                                                method: 'POST',
                                                headers: {
                                                        'Content-Type': 'multipart/form-data'
                                                      },
                                        };
                                
                                        let params = new FormData();
                                        params.append('client_id', '829616220814573579');
                                        params.append('client_secret', "2rHUnlq1yfUlpVCk6g8LL5vIIW1W9Jhc");
                                        params.append('code', response.params.code);
                                        params.append('grant_type', GrantType.AuthorizationCode);
                                        params.append('scope','identify');
                                        params.append('code_verifier', code_ver);
                                        params.append('redirect_uri', makeRedirectUri());
                                        options.body = params;
                                        const oauthResult = await fetch('https://discord.com/api/oauth2/token', options);
                
                                        const oauthData = await oauthResult.json();
                                        console.log(oauthData)
                
                                        const userResult = await fetch('https://discord.com/api/users/@me', {
                                                headers: {
                                                        authorization: `${oauthData.token_type} ${oauthData.access_token}`,
                                                },
                                        });
                
                                        console.log(await userResult.json());  */