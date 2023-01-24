import { FlatList, TouchableOpacity, ScrollView, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DATA from '../constants/caraousel'
import AdCarouselCard from '../components/HomeScreen/AdCarouselCard'
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import Dimensions from '../constants/Dimensions'
import Paginator from '../components/HomeScreen/Paginator'
import HomeOfferCards from '../components/HomeScreen/HomeOfferCards'
import HomeBookCards from '../components/HomeScreen/HomeBookCards'
import HomeTrendingSection from '../components/HomeScreen/HomeTrendingSection'
import HomeExclusiveSection from '../components/HomeScreen/HomeExclusiveSection'
import Fab from '../components/global/Fab'

const HomeScreen = ({ navigation }) => {
    const [scrollX, setScrollX] = useState(0)
    const scrollY = useSharedValue(0)

    const locationTextStyles = useAnimatedStyle(() => {
        // const scale = interpolate(scrollY.value, [0, 75], [1, 0], { extrapolateRight: Extrapolation.CLAMP });
        // const translateX = interpolate(scrollY.value, [0, 75], [0, -100], { extrapolateRight: Extrapolation.CLAMP })
        const opacity = interpolate(scrollY.value, [30, 55], [1, 0], { extrapolateRight: Extrapolation.CLAMP, extrapolateLeft: Extrapolation.CLAMP })
        return {
            // transform: [{ scale: scale }, { translateX: translateX }],
            opacity: opacity,
        };
    });

    // const searchInputTextStyles = useAnimatedStyle(() => {
    //     const scale = interpolate(scrollY.value, [0, 75], [1, 0], { extrapolateRight: Extrapolation.CLAMP, extrapolateLeft: Extrapolation.CLAMP })
    //     const opacity = interpolate(scrollY.value, [0, 50], [1, 0], { extrapolateRight: Extrapolation.CLAMP, extrapolateLeft: Extrapolation.CLAMP })

    //     return {
    //         transform: [{ scale: scale }],
    //         opacity: opacity
    //     }
    // })

    const searchIconStyles = useAnimatedStyle(() => {
        const opacity = interpolate(scrollY.value, [50, 100], [0, 1])
        const zIndex = interpolate(scrollY.value, [0, 75], [-1, 99])

        return {
            opacity: opacity,
            zIndex: zIndex
        }
    })

    const AnimatedText = Animated.createAnimatedComponent(Text);
    const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
    const AnimatedIonIcon = Animated.createAnimatedComponent(IonIcon);

    return (
        <SafeAreaView style={styles.container}>
            <Fab current="Home" />
            <View style={styles.topBar}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginLeft: 15 }}>
                    <IonIcon color='white' size={25} name='location-outline' />
                    <TouchableWithoutFeedback onPress={() => {
                        navigation.navigate('SearchScreen')
                    }}>
                        <Animated.View style={[searchIconStyles, { position: 'absolute', left: 25, color: 'red' }]}>
                            <IonIcon style={[styles.searchIcon]} size={24} color='white' name='search' />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    <AnimatedText style={[{ color: 'white', fontSize: 16, fontFamily: 'Alata' }, locationTextStyles]}>Kalavakkam, Chennai</AnimatedText>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 70, marginRight: 20 }}>
                    <MaterialCommunityIcons name='qrcode-scan' color='white' size={24} />
                    <FontAwesome name='user-circle-o' color='white' size={24} />
                </View>
            </View>
            <ScrollView onScroll={e => {
                const offsetY = e.nativeEvent.contentOffset.y;
                scrollY.value = offsetY
            }}
                scrollEventThrottle={16}
            // snapToAlignment={'start'}
            // snapToInterval={10}
            >
                <View style={{ position: 'absolute', zIndex: 99, width: Dimensions.SCREEN_WIDTH, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', width: Dimensions.SCREEN_WIDTH / 1.5, borderRadius: 15, paddingVertical: 5, backgroundColor: 'white', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <IonIcon style={{ marginHorizontal: 6 }} size={24} name='search' />
                        <TextInput
                            placeholder='Search Events, Clubs, DJs...'
                            placeholderTextColor='rgba(0, 0, 0, 0.7)'
                        />
                    </View>
                </View>
                <Animated.View style={{ marginTop: 20 }}>
                    <FlatList
                        data={DATA}
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
                                    <AdCarouselCard source={item.src} scrollX={scrollX} index={index} />
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item) => item.id}
                        onScroll={(event) => {
                            setScrollX(event.nativeEvent.contentOffset.x)
                        }}
                    />
                </Animated.View>
                <Paginator data={DATA} scrollX={scrollX} />
                <HomeOfferCards />
                <HomeBookCards />
                <HomeTrendingSection />
                <HomeExclusiveSection />

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f1f',
    },

    topBar: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingVertical: 10,
    },
    // FIXME Change top and left according to screen i.e, give dimension based values
    searchContainer: {
        flexDirection: 'row',
        width: Dimensions.SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        position: 'absolute',
        zIndex: 99,
    },

    searchIcon: {
        marginLeft: 5,
        zIndex: 99,
    },

    searchInput: {
        backgroundColor: 'white',
        position: 'absolute',
        paddingVertical: 5,
        paddingLeft: 32,
        borderRadius: 12
    }
})