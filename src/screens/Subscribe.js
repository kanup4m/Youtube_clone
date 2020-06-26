import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants'
import Header from '../components/Header'
import styled from 'styled-components/native'




const Subscribe = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Text>Subscribe</Text>
            <View style={styles.wrapper}>
                <View style={styles.card}>
                    <Text style={styles.h1}>
                        <Text style={styles.enclosed}>Cut</Text>out
        </Text>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constant.statusBarHeight

    },



})

export default Subscribe;