import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeTrendingSection = () => {

    const DATA = [
        {
            id: 1,
            src: require('../assets/images/Color-Frame-1.jpg')
        },
        {
            id: 2,
            src: require('../assets/images/Color-Frame-2.jpg')
        }
    ]
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontFamily: 'Montserrat-Bold', fontSize: 22, marginBottom: 10 }}>Trending</Text>
            <View>
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
                                <Image style={{ height: 100, width: 300, borderRadius: 10, marginHorizontal: 10 }} source={item.src} />
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={{ marginVertical: 15, marginHorizontal: 10 }}>
                <View style={{ elevation: 12 }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image style={{ height: 175, width: 350, resizeMode: 'cover', borderRadius: 10 }} source={require('../assets/images/Happy-Hours.jpg')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default HomeTrendingSection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 350,
        marginHorizontal: 15
    }
})