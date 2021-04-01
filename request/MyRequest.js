import React, { useState } from 'react';
import { Button } from 'react-native';
import { Text, View, ScrollView } from 'react-native';
import HTML from "react-native-render-html";


export const MyRequest = props =>{

    const [data, setData] = useState('<h1> Нажмите GET, чтобы получить страницу</h1>');
    const getMoviesFromApiAsync = async () => {
        try {
          let response = await fetch(
            'http://www.yandex.ru'
          );
          let html = await response.text();
          setData(html);
          return html;
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <View style={{ flex: 1, }}>
        <ScrollView style={{ flex: 1 }}>
            <HTML source={{ html: data }} />
        </ScrollView>
        <Button title="Get" onPress={getMoviesFromApiAsync} color="#7289DA" />
    </View>
  );
}