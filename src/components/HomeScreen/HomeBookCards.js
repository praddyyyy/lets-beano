import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import HomeBookCard from './HomeBookCard'
import Dimensions from '../../constants/Dimensions'
import SubTitleComponent from './SubTitleComponent'

const HomeBookCards = () => {
    return (
        <View style={{ marginTop: 35, marginBottom: 35 }}>
            <SubTitleComponent text={'Book'} />
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <HomeBookCard text={'EVENTS'} url={require('../../assets/images/Book-Image-1.jpg')} style={{ height: Dimensions.SCREEN_HEIGHT * 0.27, width: Dimensions.SCREEN_WIDTH * 0.44 }} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <HomeBookCard text={'TABLE'} url={require('../../assets/images/Book-Image-2.jpg')} style={{ height: Dimensions.SCREEN_HEIGHT * 0.12, width: Dimensions.SCREEN_WIDTH * 0.44 }} />
                        <HomeBookCard text={'DJs'} url={require('../../assets/images/Book-Image-3.jpg')} style={{ height: Dimensions.SCREEN_HEIGHT * 0.12, width: Dimensions.SCREEN_WIDTH * 0.44, marginTop: 20 }} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeBookCards

const styles = StyleSheet.create({
    container: {
        height: Dimensions.SCREEN_HEIGHT * 0.3,
        marginHorizontal: 15,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
})