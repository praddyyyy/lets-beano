import { StyleSheet, View } from 'react-native'
import React from 'react'
import Skeleton from '../global/Skeleton'
import Dimensions from '../../constants/Dimensions'

const SkeletonCarouselCard = () => {

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Skeleton width={Dimensions.CAROUSEL_CARD_LENGTH} height={Dimensions.SCREEN_HEIGHT * 0.2} style={{ borderRadius: 15 }} />
            <Skeleton width={10} height={10} style={{ borderRadius: 50, marginTop: 10 }} />
        </View>
    )
}

export default SkeletonCarouselCard

const styles = StyleSheet.create({})