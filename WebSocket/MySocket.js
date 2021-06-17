import React, { useState, useEffect, useCallback } from "react";
import { Text, View, ScrollView, FlatList, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native";
import { GiftedChat } from 'react-native-gifted-chat'
import * as Analytics from 'expo-firebase-analytics';

export const MySocket = props =>{
  const [messages, setMessages] = useState([]);

  let ws = new WebSocket('ws://quiet-retreat-59207.herokuapp.com');

  useState(() =>{
    ws.onmessage = (e) => {
      console.log(e.data);
      setMessages(prevMes => GiftedChat.append(prevMes,
        {
          _id: Math.round(Math.random() * 1000000),
          text: e.data,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ))
    };
  })

  const onSend = useCallback((messages = []) => {
    Analytics.logEvent("SendMessageButtonPressed")
    console.log(messages[0].text)
    ws.send(messages[0].text)
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return(
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}