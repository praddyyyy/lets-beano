import { StyleSheet, View } from 'react-native'
import React from 'react'
import Skeleton from '../global/Skeleton'
import Dimensions from '../../constants/Dimensions'
import SubTitleComponent from './SubTitleComponent'

const SkeletonExclusiveCard = () => {

    return (
        <View style={styles.container}>
            <SubTitleComponent text={'Exclusive'} />
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'flex-start', marginHorizontal: 10 }}>
                {
                    [1, 2, 3].map((item, index) =>
                        <Skeleton key={index} width={Dimensions.SCREEN_WIDTH * 0.35} height={Dimensions.SCREEN_HEIGHT * 0.22} style={{ borderRadius: 10, marginHorizontal: 10 }} />
                    )
                }
            </View>
        </View>
    )
}

export default SkeletonExclusiveCard

const styles = StyleSheet.create({
    container: {
    }
})