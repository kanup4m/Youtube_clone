import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'
import Constant from 'expo-constants'

import { useSelector } from 'react-redux'

const LittleCard = ({ name }) => {

    return (
        <View style={{
            backgroundColor: "red",
            height: 50,
            width: 180,
            borderRadius: 4,
            marginTop: 10
        }}>
            <Text style={{
                textAlign: "center",
                color: "white",
                fontSize: 22,
                marginTop: 5
            }}>{name}</Text>
        </View>
    )
}

const Explore = () => {
    const cardData = useSelector(state => {
        return state.cardData
    })
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <FlatList
                data={cardData}
                keyExtractor={item => item.id.videoId}
                renderItem={({ item }) => {
                    return <Card
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                        thumbnail={item.snippet.thumbnails.high.url}
                    />
                }}


            />

        </View>
    )
}

export default Explore