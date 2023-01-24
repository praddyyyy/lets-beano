import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native'
import React from 'react'

const HomeExclusiveSection = () => {
    const DATA = [
        {
            id: 1,
            src: require('../../assets/images/Exculsive-1.jpg')
        },
        {
            id: 2,
            src: require('../../assets/images/Exculsive-2.jpg')
        },
        {
            id: 3,
            src: require('../../assets/images/Exculsive-3.jpg')
        },
        {
            id: 4,
            src: require('../../assets/images/Exculsive-4.jpg')
        }
    ]
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontFamily: 'Montserrat-Bold', fontSize: 22, marginBottom: 10 }}>Exculsive</Text>
            <View>
                <FlatList
                    data={DATA}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={32}
                    decelerationRate={0.8}
                    disableIntervalMomentum={true}
                    disableScrollViewPanResponder={true}
                    snapToAlignment={'start'}
                    bounces={false}
                    pagingEnabled={true}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity activeOpacity={0.5}>
                                <Image style={{ height: 200, width: 140, borderRadius: 10, marginHorizontal: 10 }} source={item.src} />
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default HomeExclusiveSection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 280,
        marginHorizontal: 15,
    }
})