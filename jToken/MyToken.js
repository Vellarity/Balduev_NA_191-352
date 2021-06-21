import React, { useState } from 'react';
import { Text, View, ScrollView, Button, TextInput, Image, StyleSheet, Pressable } from 'react-native';

export const MyToken = props =>{
  const [username,onChangeUsername] = useState('')
  const [password,onChangePassword] = useState('')
  const [response, setResponse] = useState('')
  const [image, setImage] = useState('')

  const logIn = async() =>{
    try {
      let reqBody = {
        loginname: username,
        password: password
      }
      let req =  await fetch('https://glacial-dusk-92304.herokuapp.com/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(reqBody)
      })
      let response = await req.json()
      if (response.accessToken != ''){
        setResponse(response)
        const GetImage = async() =>{
          try {
            let imReq = await fetch('https://glacial-dusk-92304.herokuapp.com/protected',{
              headers:{
                'Authorization': `Bearer ${response.accessToken}` 
              }
            })
            let fileRes = await imReq.json()
            console.log(fileRes)
            setImage(fileRes)
          } catch (error) {
            console.log(error)
          }
        }
        GetImage()
      }
    } catch (error) {
      console.log(error)
    }
  };

  return(
    <View style={styles.View}>
      <View style={styles.innerView}>
        <TextInput 
          placeholderTextColor = "#FFF"
          placeholder={'Username...'}
          style={styles.textInp}
          onChangeText={onChangeUsername}
          value={username}
        />
        <TextInput 
          placeholderTextColor = "#FFF"
          placeholder={'Password...'}
          style= {styles.textInp}
          onChangeText={onChangePassword}
          value={password}
        />
        <Pressable android_ripple={{color:"#FFF"}} onPress={()=>{logIn()}}>
          <Text style={styles.accessTXT}>LogIn</Text>
        </Pressable>
      </View>
      <ScrollView style={{flex:1}}>
        <Text style={styles.accessTXT}>{response.accessToken}</Text>
      </ScrollView>
      <Image style={styles.funImage} resizeMethod="resize" resizeMode="center" source={{uri:`data:image/jpg;base64,${image.basefile}`}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  View:{
    flex:1,
    justifyContent:"space-between",
  },
  innerView:{
    marginVertical:15
  },
  textInp:{
    backgroundColor:"#191414",
    fontSize:20,
    height:40,
    marginHorizontal:10,
    borderRadius:10,
    marginBottom:15,
    color:"#FFF",
    padding:5
  },
  accessTXT:{
    backgroundColor:"#191414",
    fontSize:20,
    marginHorizontal:10,
    borderRadius:10,
    marginBottom:15,
    color:"#FFF",
    padding:5,
    textAlign:"center"
  },
  funImage:{
    alignItems:"center",
    width:"100%",
    height:350
  }
})