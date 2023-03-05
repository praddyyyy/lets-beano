import { StyleSheet, View } from 'react-native'
import React from 'react'
import Skeleton from '../global/Skeleton'
import Dimensions from '../../constants/Dimensions'
import SubTitleComponent from './SubTitleComponent'

const SkeletonTrendingCard = () => {

    return (
        <View style={styles.container}>
            <SubTitleComponent text={'Trending'} />
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'flex-start', marginHorizontal: 10 }}>
                {
                    [1, 2].map((item, index) =>
                        <Skeleton key={index} width={Dimensions.SCREEN_WIDTH * 0.6} height={Dimensions.SCREEN_HEIGHT * 0.1} style={{ borderRadius: 10, marginHorizontal: 10 }} />
                    )
                }
            </View>
            <View style={{ marginTop: 15, marginHorizontal: 15, marginBottom: 55 }}>
                <Skeleton width={Dimensions.SCREEN_WIDTH * 0.9} height={Dimensions.SCREEN_HEIGHT * 0.21} style={{ borderRadius: 10, marginHorizontal: 10 }} />
            </View>
        </View>
    )
}

export default SkeletonTrendingCard

const styles = StyleSheet.create({
    container: {
    }
})