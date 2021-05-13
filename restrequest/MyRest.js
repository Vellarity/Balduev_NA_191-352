import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, FlatList, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native";

export const MyApi = (props) => {
  const [data, setData] = useState({
    trackName: '1',
    trackAut: '1',
    trackIm: '1',
    id: 1
  },
  {
    trackName: '2',
    trackAut: '2',
    trackIm: '2',
    id: 2
  })

  const getList = async (val) => {
    try {
      const List = await fetch("https://api.spotify.com/v1/me/tracks", {
        headers: {
          Authorization: "Bearer "+ val,
        },
      });
      const getList = await List.json();
      if (getList.items.length < 2){
        console.log(getList)
      }
      let listArr = []
      if (getList.items.length != 0){
        for (let i = 0; i < getList.items.length; i++){
          listArr.push({
            trackName: getList.items[i].track.name,
            trackAut: getList.items[i].track.album.artists[0].name,
            trackIm: getList.items[i].track.album.images[2].url,
            id: i,
          })
        }
        setData(listArr)
      } 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getToken = async () => {
      try {
        const value = await AsyncStorage.getItem("@Token");
        if (value !== null) {
          getList(value)
        }
      } catch (e) {
        console.log(e);
      }
    };
    getToken()
  }, []);
  
  const Item = ({ title, Author, image }) => (
    <View style={{flexDirection:"row", justifyContent:"space-around", marginVertical:5, backgroundColor:"#191414", paddingVertical:10, marginHorizontal:5, borderRadius:15}}>
      <View style={{flex:1}}>
        <Image
          style={{width:64, height:64, marginLeft:10, borderRadius:10}}
          source={{ uri: image }}
        />
      </View>
      <View style={{flex:1, justifyContent:"center"}}>
        <Text style={{fontSize:20, color:"#FFF"}}>{title}</Text>
        <Text style={{fontWeight:"bold", fontSize:20, color:"#FFF"}}>{Author}</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.trackName} Author={item.trackAut} image={item.trackIm} />
  );

  return (
    <View style={{flex:1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
