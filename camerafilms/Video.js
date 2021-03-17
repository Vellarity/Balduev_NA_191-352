import React, { useState } from "react";
import {Video} from "expo-av";
import { Dimensions, View, Image, Pressable, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export const MyVideo = props =>{
    const video = React.useRef(null)
    const [videoStatus, setVideoStatus] = useState("../assets/play.png") 
    const [status, setStatus] = React.useState({});
    
    return(
        <View style={{alignItems:"center"}}>
            <Video 
                ref={video}
                source={require("../assets/Bomjiha.webm")}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="contain"
                useNativeControls
                style={{width:Dimensions.get("window").width - 40, height:Dimensions.get("window").width * 1.2}}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <TouchableOpacity style={{width:70, height:70, borderRadius:1000, justifyContent:"center", alignItems:"center"}} 
                onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
                    
                <Image
                    source={status.isPlaying ? require('../assets/pause.png') : require('../assets/play.png')}
                    style={{width:"75%", height:"75%"}}
                /> 

            </TouchableOpacity>        
        </View>
    )
}