import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';
import YoutubePlayer from 'react-native-youtube-iframe';



const VideoPlayer = ({ route }) => {
    const { videoId, title } = route.params

    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    return (
        <View style={styles.container}>

            <YoutubePlayer
                ref={playerRef}
                height={300}
                width={400}
                videoId={videoId}
                play={playing}
                onChangeState={event => console.log(event)}
                onReady={() => console.log("ready")}
                onError={e => console.log(e)}
                onPlaybackQualityChange={q => console.log(q)}
                volume={50}
                playbackRate={1}
                playerParams={{
                    cc_lang_pref: "us",
                    showClosedCaptions: true
                }}
            />

            <Text style={{
                fontSize: 20,
                width: Dimensions.get("screen").width - 50,
                margin: 9
            }}
                numberOfLines={2}
                ellipsizeMode="tail"
            >
                {title}
            </Text>
            <View
                style={{ borderBottomWidth: 1 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constant.statusBarHeight

    }
})

export default VideoPlayer;

