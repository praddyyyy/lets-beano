import { FlatList, Pressable, View } from 'react-native'
import Animated from 'react-native-reanimated'
import Dimensions from '../../../utils/Dimensions'
import { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AdCarouselCard from './AdCarouselCard'
import Paginator from './Paginator'


const AdFlatList = (props) => {
    const navigation = useNavigation()

    const [data, setData] = useState(props.data)

    const [scrollX, setScrollX] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0)

    const flatListRef = useRef()

    useEffect(() => {
        let interval = setInterval(() => {
            if (activeIndex === data.length - 1) {
                flatListRef.current.scrollToIndex(
                    {
                        index: 0,
                        animated: true
                    })
            }
            else {
                flatListRef.current.scrollToIndex(
                    {
                        index: activeIndex + 1,
                        animated: true
                    })
            }
        }, 2500);
        return () => clearInterval(interval);
    });

    const getItemLayout = (data, index) => (
        {
            length: Dimensions.CAROUSEL_CARD_LENGTH,
            offset: (Dimensions.CAROUSEL_CARD_LENGTH + 2*Dimensions.CAROUSEL_SPACING) * index,
            index,
        }
    )

    const handleScroll = (event) => {
        const position = event.nativeEvent.contentOffset.x / (Dimensions.CAROUSEL_CARD_LENGTH);
        setActiveIndex(Math.round(position));
        setScrollX(event.nativeEvent.contentOffset.x)
    }

    return (
        <View>
            <Animated.View>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    decelerationRate={0.8}
                    // snapToInterval={Dimensions.CAROUSEL_CARD_LENGTH + (Dimensions.CAROUSEL_SPACING * 4.5)}
                    disableIntervalMomentum={true}
                    disableScrollViewPanResponder={true}
                    snapToAlignment={'center'}
                    bounces={false}
                    pagingEnabled={true}
                    renderItem={({ item, index }) => {
                        return (
                            <Pressable onPress={() => navigation.navigate('ClubsScreen')}>
                                <AdCarouselCard source={item.image} scrollX={scrollX} index={index} dataLength={data.length} />
                            </Pressable>
                        )
                    }}
                    keyExtractor={(item) => item.id}
                    onScroll={handleScroll}
                    getItemLayout={getItemLayout}
                    ref={flatListRef}
                />
            </Animated.View>
            <Paginator data={data} scrollX={scrollX} />
        </View>
    )
}

export default AdFlatList