import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { useNavigation, useTheme } from '@react-navigation/native';
import Constant from 'expo-constants'
import { useDispatch, useSelector } from 'react-redux'

const Header = ({ height }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const { colors } = useTheme()
    const currentTheme = useSelector(state => {
        return state.myDarkMode
    })
    const mycolor = colors.iconColor
    const headerColor = colors.headerColor


    return (
        <View style={{
            height: 45,
            backgroundColor: headerColor,
            flexDirection: "row",
            justifyContent: "space-between",
            elevation: 1,
        }}>
            <View style={styles.flex1}>
                <Entypo name="youtube" size={32} color="red" />
                <Text style={{ fontSize: 22, marginLeft: 5, fontWeight: 'bold', color: mycolor }}>YouTube</Text>
            </View>
            <View style={styles.flex2}>
                <MaterialCommunityIcons name="camcorder" size={32} color={mycolor} />
                <FontAwesome5 name="search" size={25} color={mycolor} onPress={() => navigation.navigate('search')} />
                <MaterialCommunityIcons name="theme-light-dark" size={30} color={mycolor} onPress={() => dispatch({ type: "change_theme", payload: !currentTheme })} />
            </View>
        </View>
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
});

export default Header;

