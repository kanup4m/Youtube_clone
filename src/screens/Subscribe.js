import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Constant from 'expo-constants'
import Header from '../components/Header'
import styled from 'styled-components/native'




const Subscribe = () => {
    const { width, height } = Dimensions.get("window")

    return (
        <View style={styles.container}>
            <Header />

            <Image
                source={require('../assets/taxi-page-not-found-1.png')}

                resizeMode='contain'
                style={{
                    maxHeight: height / 1.3,
                    maxWidth: width,
                    marginTop: -60
                }}

            />
            <Text style={styles.text}>
                Nothing to show
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constant.statusBarHeight
    },
    wrong: {
        width: "50%",
        height: "100%"
    },
    text: {
        textAlign: "center",
        fontSize: 30,
    }



})

export default Subscribe;