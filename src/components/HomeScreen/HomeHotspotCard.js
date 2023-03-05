import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Dimensions from '../../constants/Dimensions'

const HomeHotspotCard = () => {
    const data = [
        {
            key: 1,
            image: 'https://images.unsplash.com/photo-1674542572845-7875fa71f1ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1998&q=80',
            title: 'Hotspot 1'
        },
        {
            key: 2,
            image: 'https://images.unsplash.com/photo-1674542572845-7875fa71f1ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1998&q=80',
            title: 'Hotspot 2'
        },
        {
            key: 3,
            image: 'https://images.unsplash.com/photo-1674542572845-7875fa71f1ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1998&q=80',
            title: 'Hotspot 2'
        },
        {
            key: 4,
            image: 'https://images.unsplash.com/photo-1674542572845-7875fa71f1ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1998&q=80',
            title: 'Hotspot 2'
        },
    ]
    return (
        // TODO Responsive image sizes
        <View style={styles.container}>
            <View>
                <Text style={{ color: 'white', fontFamily: 'Montserrat-Bold', fontSize: 22, marginHorizontal: 10, marginVertical: 10 }}>Hotspots Near You</Text>
            </View>
            <View>
                <FlatList
                    data={data}
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
                                <Image resizeMode='stretch' style={{ height: Dimensions.SCREEN_HEIGHT * 0.12, width: Dimensions.SCREEN_WIDTH * 0.35, borderRadius: 10, marginLeft: index === 0 ? 15 : 5, marginRight: index === data.length - 1 ? 15 : 5, opacity: 0.6, borderWidth: 0.5, borderColor: 'rgba(255,255,255,0.3)' }} source={{ uri: item.image }} />
                                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginHorizontal: 5 }}>
                                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Montserrat-Bold', width: '90%', textAlign: 'center' }}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.key}
                />
            </View>
        </View>
    )
}

export default HomeHotspotCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.SCREEN_HEIGHT * 0.2,
        marginHorizontal: 15,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
    }
})