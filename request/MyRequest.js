import React, { useState } from 'react';
import { Button } from 'react-native';
import { Text, View, ScrollView } from 'react-native';
import { parse } from 'node-html-parser';
import * as Analytics from 'expo-firebase-analytics';

export const MyRequest = props =>{

    const [data, setData] = useState('<h1>Нажмите GET, чтобы получить страницу</h1>');
    const [parseData,setParse] = useState('')
    const getMoviesFromApiAsync = async () => {
        try {
          let response = await fetch(
            'https://yandex.ru/news/quotes/2000.html'
          );
          let html = await response.text();
          setData(html);
          const root = parse(html);
          console.log(root.querySelector('h1').text + " " + root.querySelectorAll('.news-stock-table__cell')[4].text);
          setParse(root.querySelector('h1').text + " " + root.querySelectorAll('.news-stock-table__cell')[4].text)
          Analytics.logEvent("GetInfoButtonPressed")
          return html;
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <View style={{ flex: 1, }}>
        <ScrollView style={{ flex: 1 }}>
            <Text style={{color:"#FFF",fontWeight:"bold"}}>{data}</Text>
        </ScrollView>
        <Text style={{borderTopColor:"#FFF" , borderTopWidth:2, color:"#FFF", fontSize:20, fontWeight:"bold"}}>{parseData}</Text>
        <Button title="Get" onPress={getMoviesFromApiAsync} color="#191414" />
    </View>
  );
}