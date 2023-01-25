import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BookNowButton = () => {
    const navigation = useNavigation()
    return (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 50, alignItems: 'center', justifyContent: 'flex-end' }}>
            <TouchableOpacity style={styles.bookNowButton} onPress={() => {navigation.navigate('EventBookingScreen')}}>
                <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Montserrat-Bold' }}>BOOK NOW</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BookNowButton

const styles = StyleSheet.create({
    bookNowButton: {
        backgroundColor: '#FF4C68',
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})