import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import Constant from 'expo-constants'
import Header from '../components/Header'
import Cards from '../components/Card'


const Trending = () => {
    const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&order=viewCount&relevanceLanguage=en&type=video&key=[Add your key]'
    const [stat, setStat] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setStat(data.items)
            });
    }, [])
    return (
        <View style={styles.container}>
            <Header />

            {loading ? <ActivityIndicator size="large" color="red" style={{ marginTop: 10 }} /> : <FlatList
                data={stat}
                keyExtractor={item => item.id.videoId}
                renderItem={({ item }) => {
                    return <Cards
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                        thumbnail={item.snippet.thumbnails.high.url}
                    />
                }}
            />}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constant.statusBarHeight

    },



})

export default Trending;
