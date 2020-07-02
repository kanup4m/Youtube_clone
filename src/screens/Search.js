import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, ActivityIndicator, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Minicard from '../components/Minicard';
import Constant from 'expo-constants'
import { useTheme } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'


const Search = ({ navigation }) => {
    const { colors } = useTheme()
    const mycolor = colors.iconColor

    const [value, setValue] = useState('')
    const [stat, setStat] = useState([])
    const abc = []
    const dispatch = useDispatch()
    const data = useSelector(state => {
        return state.cardData
    })
    const [loading, setLoading] = useState(false)
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${value}&regionCode=IN&type=video&key=[Add your key]`
    const fetchData = () => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setStat(data.items)
                dispatch({ type: "add", payload: data.items })
            });
    }



    return (
        <View style={styles.container}>
            <View style={{ padding: 5, flexDirection: "row", justifyContent: "space-around", elevation: 5, backgroundColor: colors.headerColor }}>
                <Ionicons name="md-arrow-back" style={{ color: mycolor }} size={32} onPress={() => navigation.goBack()} />
                <TextInput onChangeText={(text) => setValue(text)} value={value} style={{ width: "70%", backgroundColor: "#e6e6e6" }} onSubmitEditing={fetchData} />
                <Ionicons name="md-send" style={{ color: mycolor }} size={32} onPress={fetchData} />
            </View>
            {loading ? <ActivityIndicator size="large" color="red" style={{ marginTop: 10 }} /> : null}
            <FlatList
                data={data}
                keyExtractor={item => item.id.videoId}
                renderItem={({ item }) => {
                    return <Minicard
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                        thumbnail={item.snippet.thumbnails.high.url}
                    />
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constant.statusBarHeight
    },
})

export default Search;
