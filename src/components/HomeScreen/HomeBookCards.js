import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import HomeBookCard from './HomeBookCard'
import Dimensions from '../../constants/Dimensions'

const HomeBookCards = () => {
    return (
        <View style={styles.container}>
            <View style={{ borderWidth: 1, borderColor: '#fff', borderRadius: 15, marginHorizontal: 10, backgroundColor: '#1f1f1f' }}>
                <Text style={{ color: 'white', fontFamily: 'Montserrat-Bold', fontSize: 22, marginHorizontal: 10 }}>Book</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <HomeBookCard url={require('../../assets/images/Book-Image-1.jpg')} style={{ height: Dimensions.SCREEN_HEIGHT * 0.27, width: Dimensions.SCREEN_WIDTH * 0.44 }} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <HomeBookCard url={require('../../assets/images/Book-Image-2.jpg')} style={{ height: Dimensions.SCREEN_HEIGHT * 0.12, width: Dimensions.SCREEN_WIDTH * 0.44 }} />
                    <HomeBookCard url={require('../../assets/images/Book-Image-3.jpg')} style={{ height: Dimensions.SCREEN_HEIGHT * 0.12, width: Dimensions.SCREEN_WIDTH * 0.44, marginTop: 20 }} />
                </View>
            </View>
        </View>
    )
}

export default HomeBookCards

const styles = StyleSheet.create({
    container: {
        height: Dimensions.SCREEN_HEIGHT * 0.35,
        marginHorizontal: 15,
        marginTop: 25,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
})