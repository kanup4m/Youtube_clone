import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Button, Image, Dimensions } from 'react-native';
import { Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { useNavigation, useTheme } from '@react-navigation/native';
import Constant from 'expo-constants'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const { colors } = useTheme()
    const currentTheme = useSelector(state => {
        return state.myDarkMode
    })
    const mycolor = colors.iconColor
    const headerColor = colors.headerColor
    const { width, height } = Dimensions.get("window")


    return (
        <View style={{
            height: 45,
            backgroundColor: headerColor,
            flexDirection: "row",
            justifyContent: "space-between",
            elevation: 1,
        }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image
                            source={require('../assets/mirage-coming-soon.png')}

                            resizeMode='contain'
                            style={{
                                maxHeight: height / 3,
                                maxWidth: width / 2,
                                marginTop: -40
                            }}

                        />
                        <Text>This feature will be added soon</Text>
                        <View style={{ paddingLeft: 25, paddingRight: 25, paddingTop: 10 }}>

                            <Button onPress={() => {
                                setModalVisible(!modalVisible);
                            }} title="Close" color="#ff0000"
                            />
                        </View>

                    </View>

                </View>
            </Modal>
            <View style={styles.flex1}>
                <Entypo name="youtube" size={32} color="red" />
                <Text style={{ fontSize: 22, marginLeft: 5, fontWeight: 'bold', color: mycolor }}>YouTube</Text>
            </View>
            <View style={styles.flex2}>
                <MaterialCommunityIcons name="camcorder" size={32} color={mycolor} onPress={() => {
                    setModalVisible(true);
                }} />
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        borderRadius: 30,
        backgroundColor: "white",
        padding: 50
    }
});

export default Header;

