import { FlatList, TouchableOpacity, StyleSheet, View } from 'react-native'
import Animated from 'react-native-reanimated'
import Dimensions from '../../constants/Dimensions'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AdCarouselCard from './AdCarouselCard'
import Paginator from './Paginator'


const AdFlatList = (props) => {
    const [data, setData] = useState(props.data)
    const navigation = useNavigation()

    const [scrollX, setScrollX] = useState(0);

    return (
        <View>
            <Animated.View>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    decelerationRate={0.8}
                    snapToInterval={Dimensions.CAROUSEL_CARD_LENGTH + (Dimensions.CAROUSEL_SPACING * 4.5)}
                    disableIntervalMomentum={true}
                    disableScrollViewPanResponder={true}
                    snapToAlignment={'center'}
                    bounces={false}
                    pagingEnabled={true}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('ClubScreen')}>
                                <AdCarouselCard source={item.image} scrollX={scrollX} index={index} />
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.key}
                    onScroll={(event) => {
                        setScrollX(event.nativeEvent.contentOffset.x)
                    }}
                />
            </Animated.View>
            <Paginator data={data} scrollX={scrollX} />
        </View>
    )
}

export default AdFlatList

const styles = StyleSheet.create({})