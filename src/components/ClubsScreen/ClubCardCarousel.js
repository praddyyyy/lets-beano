import { FlatList, Image, Pressable, View } from 'react-native'
import React from 'react'
import Dimensions from '../../utils/Dimensions'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
// TODO for tab screen size
const ClubCardCarousel = (props) => {
    const [data, setData] = useState(props)

    const [activeIndex, setActiveIndex] = useState(0)

    const navigation = useNavigation()

    // const flatListRef = useRef()

    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         if (activeIndex === carouselData.length - 1) {
    //             flatListRef.current.scrollToIndex(
    //                 {
    //                     index: 0,
    //                     animated: true
    //                 })
    //         }
    //         else {
    //             flatListRef.current.scrollToIndex(
    //                 {
    //                     index: activeIndex + 1,
    //                     animated: true
    //                 })
    //         }
    //     }, 2000);
    //     return () => clearInterval(interval);
    // });

    // const getItemLayout = (data, index) => (
    //     {
    //         length: Dimensions.SCREEN_WIDTH * 0.9,
    //         offset: (Dimensions.SCREEN_WIDTH * 0.9) * index,
    //         index
    //     }
    // )

    const carouselData = [
        {
            id: 1,
            image: require('../../assets/images/Club-1.jpg')
        },
        {
            id: 2,
            image: require('../../assets/images/Club-2.jpg')
        },
        {
            id: 3,
            image: require('../../assets/images/Club-3.jpg')
        },
    ]

    const handleScroll = (event) => {
        const position = event.nativeEvent.contentOffset.x / (Dimensions.SCREEN_WIDTH * 0.9); // 30 is the marginHorizontal of the card
        setActiveIndex(Math.round(position));
    }

    return (
        <View>
            {/* <Image style={{ height: 200, width: '100%', resizeMode: 'stretch', borderTopLeftRadius: 15, borderTopRightRadius: 15, borderWidth: 0.5, borderColor: '#2c2c2c' }} source={require('../../assets/images/Club-1.jpg')} /> */}
            <FlatList
                data={carouselData}
                renderItem={({ item }) => {
                    return (
                        <Pressable
                            // TODO Send club location to club detail screen
                            onPress={() => navigation.navigate('ClubDetailScreen', { clubId: data.clubId, title: data.clubName, imageSrc: data.clubImage, clubHighlights: data.clubHighlights, clubRating: data.clubRating, clubPhone: data.clubPhone, clubEmail: data.clubEmail, clubFeatures: data.clubFeatures, clubPriceForTwo: data.clubPriceForTwo })}
                        >
                            <Image style={{ height: 220, width: Dimensions.isLargeScreen() ? Dimensions.SCREEN_WIDTH * 0.8 : Dimensions.SCREEN_WIDTH * 0.9, resizeMode: 'stretch', borderTopLeftRadius: 15, borderTopRightRadius: 15, borderWidth: 0.5, borderColor: '#2c2c2c' }} source={item.image} />
                        </Pressable>
                    )
                }}
                horizontal
                pagingEnabled
                onScroll={handleScroll}
                showsHorizontalScrollIndicator={false}
                // getItemLayout={getItemLayout}
                keyExtractor={item => item.id.toString()}
            // ref={flatListRef}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'absolute', alignSelf: 'center', top: 10 }}>
                {
                    carouselData.map((dot, index) => {
                        return (
                            <View key={index} style={{ backgroundColor: '#fff', opacity: index === activeIndex ? 0.8 : 0.2, height: 7, width: 7, borderRadius: 5, marginHorizontal: 2 }}>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default ClubCardCarousel