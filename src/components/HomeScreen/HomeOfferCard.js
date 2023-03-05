import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Shadow } from 'react-native-shadow-2'
import Dimensions from '../../constants/Dimensions'

const HomeOfferCard = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <Image style={styles.ImageStyle} source={{ uri: props.url }} />
        </TouchableOpacity>
    )
}

export default HomeOfferCard

const styles = StyleSheet.create({
    ImageStyle: {
        height: Dimensions.SCREEN_HEIGHT * 0.10,
        width: Dimensions.SCREEN_WIDTH * 0.25,
        borderRadius: 10,
        marginHorizontal: 10,
    }
})