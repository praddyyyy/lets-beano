import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

const HomeBookCards = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontFamily: 'Montserrat-Bold', fontSize: 22 }}>Book</Text>
            <View style={{ flexDirection: 'row', marginTop: 10, height: 40 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image style={{ height: 220, width: 170, borderRadius: 10 }} source={require('../assets/images/Book-Image-1.jpg')} />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image style={{ height: 100, width: 170, borderRadius: 10 }} source={require('../assets/images/Book-Image-2.jpg')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ marginTop: 20, height: 100, width: 170, borderRadius: 10 }} source={require('../assets/images/Book-Image-3.jpg')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HomeBookCards

const styles = StyleSheet.create({
    container: {
        height: 270,
        marginHorizontal: 15,
        marginTop: 20,
    }
})