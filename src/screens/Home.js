import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Animated } from 'react-native';
import Constant from 'expo-constants'
import Header from '../components/Header'
import Card from '../components/Card';
import { useSelector } from 'react-redux'

export default function Home({ navigation }) {
    const [abc, setAbc] = useState([])
    const scrollY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(scrollY, 0, 45)
    const translateY = diffClamp.interpolate({
        inputRange: [0, 45],
        outputRange: [0, -45]
    })
    const cardData = useSelector(state => {
        return state.cardData
    })



    return (
        <View style={styles.container} >
            <Header />

            <FlatList
                data={cardData}
                renderItem={({ item }) => {
                    return <Card
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                        thumbnail={item.snippet.thumbnails.high.url}
                    />
                }}
                keyExtractor={item => item}
                onScroll={(e) => {
                    scrollY.setValue(e.nativeEvent.contentOffset.y)
                }}
            />
            {/* <FlatList
                data={abc}
                renderItem={({ item }) => <Text>{item.items[0].statistics.viewCount}</Text>}
                keyExtractor={item => item.items[0].statistics.viewCount}
            /> */}







        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constant.statusBarHeight

    },
})