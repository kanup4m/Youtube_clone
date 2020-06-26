import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

const Minicard = (props) => {
    const navigation = useNavigation();
    const { colors } = useTheme()
    const textcolor = colors.iconColor
    const thumbnail = props.thumbnail
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("videoplayer", { videoId: props.videoId, title: props.title })}
        >
            <View style={styles.container}>
                <Image source={{ uri: thumbnail }} style={{ width: "45%", height: 100 }} />
                <View style={{ paddingLeft: 7 }}>
                    <Text ellipsizeMode="tail" numberOfLines={3} style={{ width: Dimensions.get("screen").width / 2, fontSize: 17, color: textcolor }}>{props.title}</Text>
                    <Text style={{ fontSize: 12, color: textcolor }}>{props.channel}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 0,
        margin: 10
    }
})
export default Minicard;

