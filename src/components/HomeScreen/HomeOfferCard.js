import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Shadow } from 'react-native-shadow-2'
import Dimensions from '../../constants/Dimensions'

const HomeOfferCard = (props) => {
    return (
        <Shadow style={{ borderRadius: 10 }} distance={5} startColor={'#000'} endColor={'#1f1f1f'} offset={[2, 2]}>
            <TouchableOpacity activeOpacity={0.5}>
                <Image style={styles.ImageStyle} source={props.url} />
            </TouchableOpacity>
        </Shadow>
    )
}

export default HomeOfferCard

const styles = StyleSheet.create({
    ImageStyle: {
        height: Dimensions.SCREEN_HEIGHT * 0.10, 
        width: Dimensions.SCREEN_WIDTH * 0.25, 
        borderRadius: 10
    }
})