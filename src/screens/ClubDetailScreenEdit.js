import { StyleSheet, Text, View, Image, ScrollView, useWindowDimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import Animated, { interpolate, useAnimatedStyle, Extrapolate, useSharedValue, interpolateNode } from 'react-native-reanimated';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import MapView, { Marker } from 'react-native-maps';
import Icon, { Icons } from '../components/Icons';
import { MotiView, useDynamicAnimation } from 'moti'
import Dimensions from '../constants/Dimensions';


const ClubDetailScreenEdit = ({ route }) => {
    const clubName = route.params.title;
    const clubImage = route.params.imageSrc;
    const clubLocation = route.params.clubLocation;
    const clubHighlights = route.params.clubHighlights;

    const HEADER_HEIGHT = 250;
    const scrollY = new Animated.Value(0)
    // const scrollY = useSharedValue(0)
    const scrolling = useRef(new Animated.Value(0)).current;
    const [yValue, setYValue] = useState(0);
    const animation = useDynamicAnimation(() => {
        return {
            width: '100%',
            height: 250
        }
    })
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Quick Look' },
        { key: 'second', title: 'Menu' },
        { key: 'third', title: 'Offers' },
        { key: 'fourth', title: 'Review' },
    ]);

    const translation = scrollY.interpolate({
        inputRange: [180, 330],
        outputRange: [-100, 0],
        extrapolate: 'clamp',
    });

    const tabTranslation = scrollY.interpolate({
        inputRange: [180, 330],
        outputRange: [250, 60],
        extrapolate: 'clamp',
    })

    const ImageTranslation = scrollY.interpolate({
        inputRange: [180, 330],
        outputRange: [250, 60],
        extrapolate: 'clamp',
    })

    const ImageOpacity = scrolling.interpolate({
        inputRange: [180, 330],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    })

    const QuickLookRoute = () => (
        <View>
            <Animated.ScrollView
                // onScroll={e => {
                //     if (scrollY.value > 30) {
                //         animation.animateTo({
                //             width: '100%',
                //             height: scrollY.value > 250 ? 60 : 300 - scrollY.value
                //         })
                //     }
                //     else { animation.animateTo({ width: '100%', height: 250 }) }

                //     scrolling.value = e.nativeEvent.contentOffset.y.toFixed(0)
                //     console.log(scrolling.value)
                // }}

                // onScroll={e => {
                //     if (e.nativeEvent.contentOffset.y.toFixed(0) > 30) {
                //         animation.animateTo({
                //             width: '100%',
                //             height: yValue > 250 ? 60 : 300 - yValue
                //         })
                //     }
                //     else { animation.animateTo({ width: '100%', height: 250 }) }

                //     setYValue(e.nativeEvent.contentOffset.y.toFixed(0))
                //     console.log(yValue)
                // }}

                onScroll={Animated.event(
                    [{
                        nativeEvent: {
                            contentOffset: {
                                y: scrollY,
                            },
                        },
                    }],
                    { useNativeDriver: true },
                )}
                scrollEventThrottle={16}
            >
                <View style={{ flex: 1, backgroundColor: '#000', marginHorizontal: 15, marginVertical: 20 }}>
                    {/* Details Container */}
                    <View style={{ borderColor: '#fff', borderRadius: 15, borderWidth: 1 }}>
                        {/* Left Container Club Details */}
                        <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                            <View style={{ marginBottom: 5 }}>
                                <Text style={{ color: 'white', fontSize: 26, marginTop: 10, fontFamily: 'Montserrat-Bold' }}>{clubName}</Text>
                                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Blinker', margin: 3 }}>{clubLocation}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    {clubHighlights.map((item, index) => (
                                        <Text key={index} style={{ color: 'white', marginRight: 5, fontFamily: 'Blinker-SemiBold', fontSize: 15, margin: 3 }}>{item}</Text>
                                    ))}
                                </View>
                                <Text style={{ color: 'white', fontFamily: 'Blinker', margin: 3, fontSize: 15 }}><Text style={{ fontFamily: 'Blinker-Bold' }}>INR 1800</Text> for two approx</Text>
                                <Text style={{ color: '#FF4C68', fontFamily: 'Blinker', margin: 3, fontSize: 15 }}>Now Open <Text style={{ fontFamily: 'Blinker', color: '#fff' }}>- Closes 11:00 PM</Text></Text>
                                <Text style={{ color: '#FF4C68', fontFamily: 'Blinker-SemiBold', margin: 3, fontSize: 18 }}>10% off using Beano Pay</Text>
                            </View>
                            {/* Rating and Review Card */}
                            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <View style={{ backgroundColor: '#1f1f1f', justifyContent: 'center', alignItems: 'center', borderRadius: 15, width: '60%' }}>
                                    <View style={{ backgroundColor: '#FF4C68', width: '100%', alignItems: 'center', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                                        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Blinker-SemiBold' }}>4.3</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ color: 'white', fontSize: 16, marginTop: 10, marginHorizontal: 15, fontFamily: 'Blinker-SemiBold' }}>435</Text>
                                        <Text style={{ color: 'white', fontSize: 16, marginHorizontal: 15, marginBottom: 5 }}>Reviews</Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#1f1f1f', borderRadius: 15 }}>
                                    <Text style={{ color: 'white', fontSize: 16, marginHorizontal: 15, marginVertical: 10, fontFamily: 'Blinker-SemiBold' }}>47 Kms</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* Features Container */}
                    {/* TODO Add icons */}
                    <View style={{ borderColor: '#fff', borderRadius: 15, borderWidth: 1, marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: '#fff', fontSize: 16, marginHorizontal: 10, marginVertical: 10 }}>Features and Facilities</Text>
                        <View style={{ marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <View>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Home Delivery</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Smoking Area</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Take Away</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Valet Parking</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Bar</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Alcohol Served</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Live Music</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Karaoke</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Live Sports Screening</Text>
                            </View>
                        </View>
                    </View>

                    {/* Location Container */}
                    <View style={{ borderColor: '#fff', borderRadius: 15, borderWidth: 1, marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: '#fff', fontSize: 16, marginHorizontal: 10, marginVertical: 10 }}>Locate and Contact</Text>
                        <View>
                            {/* TODO Add animation as in https://blog.logrocket.com/react-native-maps-introduction/ */}
                            <MapView style={{ width: '100%', height: 200 }} initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}>
                                <Marker coordinate={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }} />
                            </MapView>
                        </View>
                        <View style={{ marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginVertical: 10, marginHorizontal: 15 }}>
                                <Icon type={Icons.MaterialIcons} name={'location-on'} size={28} color={'#fff'} />
                                <Text style={{ fontFamily: 'Blinker', color: '#fff', fontSize: 16 }}>3rd Floor, New No-73, AG Block 4th Avenue, 7th Main Rd, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600040</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon type={Icons.MaterialIcons} name={'call'} size={28} color={'#fff'} />
                                    <Text style={{ fontFamily: 'Blinker', color: '#fff', fontSize: 16, marginHorizontal: 15 }}>044 2626 2626</Text>
                                </View>
                                <View style={{ flexDirection: 'row', backgroundColor: '#FF4C68', borderRadius: 15 }}>
                                    <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#fff', padding: 8 }}>Call Now</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Recommendation Container */}
                    <View style={{ borderColor: '#fff', borderRadius: 15, borderWidth: 1, marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: '#fff', fontSize: 16, marginHorizontal: 10, marginVertical: 10 }}>Recommended Dishes</Text>
                        <View style={{ marginHorizontal: 15, marginBottom: 10 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <View style={{ marginRight: 15 }}>
                                    <Image source={require('../assets/images/food-1.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                                    <Text style={{ color: '#fff', fontFamily: 'Blinker' }}>Peri Peri Chicken</Text>
                                </View>

                                <View style={{ marginRight: 15 }}>
                                    <Image source={require('../assets/images/food-2.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                                    <Text style={{ color: '#fff', fontFamily: 'Blinker' }}>Peri Peri Chicken</Text>
                                </View>

                                <View style={{ marginRight: 15 }}>
                                    <Image source={require('../assets/images/food-3.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                                    <Text style={{ color: '#fff', fontFamily: 'Blinker' }}>Peri Peri Chicken</Text>
                                </View>

                                <View style={{ marginRight: 15 }}>
                                    <Image source={require('../assets/images/food-4.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                                    <Text style={{ color: '#fff', fontFamily: 'Blinker' }}>Peri Peri Chicken</Text>
                                </View>

                                <View style={{ marginRight: 15 }}>
                                    <Image source={require('../assets/images/food-5.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                                    <Text style={{ color: '#fff', fontFamily: 'Blinker' }}>Peri Peri Chicken</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>

                    {/* Contact Us Container */}
                    <View style={{ borderColor: '#fff', borderRadius: 15, borderWidth: 1, marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: '#fff', fontSize: 16, marginHorizontal: 10, marginTop: 10 }}>Looking for help?</Text>
                        <Text style={{ fontFamily: 'Montserrat', color: '#fff', fontSize: 16, marginHorizontal: 10, marginBottom: 10 }}>Talk to us now</Text>
                        {/* TODO Add Image of Contact US */}
                    </View>

                    {/* Similar Restaurants Container */}
                    {/* TODO Add shadow */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: '#fff', fontSize: 16, marginHorizontal: 10, marginVertical: 10 }}>Similar Restaurants</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={{ backgroundColor: '#1f1f1f', width: 150, height: 220, borderRadius: 15, marginRight: 10 }}>
                                <View>
                                    <Image source={require('../assets/images/Club-1.jpg')} style={{ width: 150, height: 150, borderRadius: 15 }} />
                                </View>
                                <View style={{ marginHorizontal: 10, marginBottom: 10, marginTop: 5 }}>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold' }}>Dance Again</Text>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat' }}>Anna Nagar</Text>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-Light' }}>6.3 Km</Text>
                                </View>
                            </View>

                            <View style={{ backgroundColor: '#1f1f1f', width: 150, height: 220, borderRadius: 15, marginRight: 10 }}>
                                <View>
                                    <Image source={require('../assets/images/Club-2.jpg')} style={{ width: 150, height: 150, borderRadius: 15 }} />
                                </View>
                                <View style={{ marginHorizontal: 10, marginBottom: 10, marginTop: 5 }}>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold' }}>Dance Again</Text>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat' }}>Anna Nagar</Text>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-Light' }}>6.3 Km</Text>
                                </View>
                            </View>

                            <View style={{ backgroundColor: '#1f1f1f', width: 150, height: 220, borderRadius: 15, marginRight: 10 }}>
                                <View>
                                    <Image source={require('../assets/images/Club-3.jpg')} style={{ width: 150, height: 150, borderRadius: 15 }} />
                                </View>
                                <View style={{ marginHorizontal: 10, marginBottom: 10, marginTop: 5 }}>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold' }}>Dance Again</Text>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat' }}>Anna Nagar</Text>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-Light' }}>6.3 Km</Text>
                                </View>
                            </View>

                            <View style={{ backgroundColor: '#1f1f1f', width: 150, height: 220, borderRadius: 15, marginRight: 10 }}>
                                <View>
                                    <Image source={require('../assets/images/Club5.jpg')} style={{ width: 150, height: 150, borderRadius: 15 }} />
                                </View>
                                <View style={{ marginHorizontal: 10, marginBottom: 10, marginTop: 5 }}>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold' }}>Dance Again</Text>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat' }}>Anna Nagar</Text>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-Light' }}>6.3 Km</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Animated.ScrollView>
        </View>

    );

    const MenuRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
    );

    const OffersRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#ff4081' }} />

    )

    const ReviewRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
    );

    // This is our placeholder component for the tabs
    // This will be rendered when a tab isn't loaded yet
    // You could also customize it to render different content depending on the route
    // TODO Check if this is working
    const LazyPlaceholder = ({ route }) => (
        <View style={styles.scene}>
            <Text>Loading {route.title}…</Text>
        </View>
    );

    const _renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;

    const renderScene = SceneMap({
        first: QuickLookRoute,
        second: MenuRoute,
        third: OffersRoute,
        fourth: ReviewRoute,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={{ backgroundColor: '#1f1f1f' }}
            renderLabel={({ route, focused }) => (
                <Text style={{ color: focused ? 'white' : 'grey', margin: 5 }} >{route.title}</Text>
            )}
            renderLazyPlaceholder={_renderLazyPlaceholder}
        />
    );


    return (
        <View style={styles.container}>
            {/* <MotiView state={animation} transition={{ type: 'timing' }} style={{ height: 250, width: '100%' }} >
                <Image source={clubImage} style={{ height: '100%', width: '100%' }} />
            </MotiView> */}

            <Animated.View style={{
                height: ImageTranslation, position: 'absolute', width: '100%', opacity: ImageOpacity
            }} >
                <Image source={clubImage} style={{ height: '100%', width: '100%' }} />
            </Animated.View>
            <Animated.View style={{ height: Dimensions.SCREEN_HEIGHT, top: tabTranslation }}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={renderTabBar}
                // style={{
                //     transform: [
                //         { translateY: tabTranslation }
                //     ]
                // }}
                />
            </Animated.View>
            {/* <MotiView from={{ translateY: -60 }} transition={{ type: 'timing', duration: '500' }} animate={{ translateY: yValue > 300 ? 0 : -60 }} style={{ width: '100%', height: 60, backgroundColor: '#fff', position: 'absolute', top: 0 }}>

            </MotiView> */}
            {/* <Animated.View
                style={{
                    position: 'absolute',
                    top: 0,
                    height: 60,
                    width: '100%',
                    backgroundColor: '#1f1f1f',
                    transform: [
                        { translateY: translation },
                    ],
                }}
            /> */}
        </View >
    )
}

export default ClubDetailScreenEdit

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    }
})