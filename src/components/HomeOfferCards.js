import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BoxShadow } from 'react-native-shadow'

const HomeBookCards = () => {
    const shadowOpt = {
        width: 100,
        height: 100,
        color: "#000",
        border: 6,
        radius: 15,
        opacity: 0.5,
        x: 2,
        y: 2,
    }
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontFamily: 'Montserrat-Bold', fontSize: 22 }}>Offers</Text>
            <View style={{ flexDirection: 'row', marginTop: 10, height: 40, justifyContent: 'space-around' }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Image style={{ height: 100, width: 100, borderRadius: 10 }} source={require('../assets/images/Color-Frame-1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}>
                    <Image style={{ height: 100, width: 100, borderRadius: 10 }} source={require('../assets/images/Color-Frame-2.jpg')} />
                </TouchableOpacity>
                <BoxShadow setting={shadowOpt}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image style={{ height: 100, width: 100, borderRadius: 10 }} source={require('../assets/images/Color-Frame-3.jpg')} />
                    </TouchableOpacity>
                </BoxShadow>
            </View>
        </View>
    )
}

export default HomeBookCards

const styles = StyleSheet.create({
    container: {
        height: 150,
        marginHorizontal: 15,
        marginTop: 20,
    }
})