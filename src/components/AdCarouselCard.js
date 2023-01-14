import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import Dimensions from '../constants/Dimensions'
import Animated, { interpolate, Extrapolate, useSharedValue, useAnimatedStyle } from 'react-native-reanimated'

const AdCarouselCard = (props) => {

    const size = useSharedValue(0.8);
    const inputRange = [
        (props.index - 1) * Dimensions.CAROUSEL_CARD_LENGTH,
        props.index * Dimensions.CAROUSEL_CARD_LENGTH,
        (props.index + 1) * Dimensions.CAROUSEL_CARD_LENGTH,
    ]
    size.value = interpolate(
        props.scrollX,
        inputRange,
        [0.8, 1, 0.8],
        Extrapolate.CLAMP
    )

    const cardStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scaleY: size.value }]
        }
    })

    return (
        <Animated.View style={[styles.card, cardStyle, {
            marginLeft: props.index === 0 ? Dimensions.CAROUSEL_SIDE_CARD_LENGTH : Dimensions.CAROUSEL_SPACING,
            marginRight: props.index === 2 ? Dimensions.CAROUSEL_SIDE_CARD_LENGTH : Dimensions.CAROUSEL_SPACING
        }]}>
            <Image source={props.source} style={{ height: '100%', width: '100%' }} />
        </Animated.View>
    )
}

export default AdCarouselCard

const styles = StyleSheet.create({
    card: {
        width: Dimensions.CAROUSEL_CARD_LENGTH,
        height: 180,
        overflow: 'hidden',
        borderRadius: 20
    }
})