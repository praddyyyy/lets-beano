import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Dimensions from '../../constants/Dimensions'

const HomeTrendingSection = () => {

    const DATA = [
        {
            id: 1,
            src: require('../../assets/images/Color-Frame-1.jpg')
        },
        {
            id: 2,
            src: require('../../assets/images/Color-Frame-2.jpg')
        }
    ]
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ color: 'white', fontFamily: 'Montserrat-Bold', fontSize: 22, marginBottom: 10 }}>Trending</Text>
            </View>
            <View style={{ marginHorizontal: 15 }}>
                <FlatList
                    data={DATA}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    decelerationRate={0.8}
                    disableIntervalMomentum={true}
                    disableScrollViewPanResponder={true}
                    snapToAlignment={'center'}
                    bounces={false}
                    pagingEnabled={true}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity>
                                <Image style={{ height: Dimensions.SCREEN_HEIGHT * 0.1, width: Dimensions.SCREEN_WIDTH * 0.6, borderRadius: 10, marginRight: 10 }} source={item.src} />
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={{ marginTop: 15, marginHorizontal: 15 }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Image style={{ height: Dimensions.SCREEN_HEIGHT * 0.21, width: '100%', resizeMode: 'cover', borderRadius: 10 }} source={require('../../assets/images/Happy-Hours.jpg')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default HomeTrendingSection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.SCREEN_HEIGHT * 0.4,
        marginHorizontal: 15,
    }
})