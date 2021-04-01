import React, { useState } from "react";
import {Video} from "expo-av";
import { Dimensions, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Slider, Icon } from 'react-native-elements';


export const MyVideo = props =>{
    const video = React.useRef(null)
    const [playing, setPlaying] = useState(false);
    const [position, setPosition] = useState(0);
    const [duration, setDuration] = useState(0);

    async function skip(bool) {
        const status = await video.current.getStatusAsync();
        const curPos = status.positionMillis;
        const tenSeconds = 5000;
        const newPos = bool ? curPos + tenSeconds : curPos - tenSeconds;
      
        video.current.setPositionAsync(newPos);
    }

    function handlePlaybackStatusUpdate(e) {
      if (e.isPlaying && !playing) {
        setPlaying(true);
      }
      if (!e.isPlaying && playing) {
        setPlaying(false);
      }
    
      if (e.isPlaying) {
        setPosition(e.positionMillis);
      }
    
      if (duration === 0) {
        setDuration(e.durationMillis);
      }
    }

    function handleDoneSliding(value) {
        setPosition(value);
        video.current.setPositionAsync(value);
    }
      
    function togglePlayPause() {
        playing
          ? video.current.pauseAsync()
          : video.current.playAsync();
      }
    
    return(
        <View style={{flex:1,alignItems:"center", justifyContent:"space-around"}}>
            <Video 
                ref={video}
                source={require("../assets/Bomjiha.webm")}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="contain"
                isLooping
                style={{width:Dimensions.get("window").width - 40, height:Dimensions.get("window").width * 1.2}}
                onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
            />
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <TouchableOpacity style={{width:70, height:70, borderRadius:1000, justifyContent:"center", alignItems:"center"}} 
                    onPress={() => skip(false)}>
                        
                    <Icon
                        size={50}
                        name="play-back"
                        type='ionicon'
                    />

                </TouchableOpacity>

                <TouchableOpacity style={{width:70, height:70, borderRadius:1000, justifyContent:"center", alignItems:"center"}} 
                onPress={togglePlayPause}>

                    {playing ? (<Icon name="pause" size={50} />) : (<Icon name="play-arrow" size={50} />)}

                </TouchableOpacity>

                <TouchableOpacity style={{width:70, height:70, borderRadius:1000, justifyContent:"center", alignItems:"center"}} 
                    onPress={() => skip(true)}>
                        
                    <Icon
                        size={50}
                        name="play-forward"
                        type='ionicon'
                    />

                </TouchableOpacity>
            </View>
            <Slider
                style={{ width:300 }}
                minimumValue={0}
                maximumValue={duration}
                value={position}
                onSlidingComplete={handleDoneSliding}
                thumbStyle={{ height: 0, width: 0, backgroundColor: 'transparent'  }} 
                trackStyle={{ height: 4, backgroundColor: '#FB2D2D' }}
                minimumTrackTintColor={"#7289DA"}
            />        
        </View>
    )
}