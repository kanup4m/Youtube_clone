import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { useNavigation, useTheme } from '@react-navigation/native';

const Card = (props) => {
    const navigation = useNavigation();
    const { colors } = useTheme()
    const textcolor = colors.iconColor
    const thumbnail = props.thumbnail
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("videoplayer", { videoId: props.videoId, title: props.title })}
        >
            <View style={styles.container}>
                <Image source={{ uri: thumbnail }} style={{ width: "100%", height: 200 }} />
                <View style={styles.flex1}>
                    <MaterialCommunityIcons name="account-circle" size={40} color="#212121" />
                    <View style={{ marginLeft: 5 }}>
                        <Text ellipsizeMode="tail" numberOfLines={2} style={{ width: Dimensions.get("screen").width / 1.2, fontSize: 20, color: textcolor }}>{props.title}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", width: Dimensions.get("screen").width - 50 }}>
                            <Text style={{ color: textcolor }}>{props.channel}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    flex1: {
        flexDirection: 'row',
        margin: 5
    },
    flex2: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-between',
        width: 120,
        marginRight: 20
    },
    container: {
        marginBottom: 10,
    }

});



export default Card;