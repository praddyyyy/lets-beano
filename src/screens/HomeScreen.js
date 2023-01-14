import { FlatList, TouchableOpacity, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DATA from '../constants/caraousel'
import AdCarouselCard from '../components/AdCarouselCard'
import Animated from 'react-native-reanimated'
import Dimensions from '../constants/Dimensions'
import Paginator from '../components/Paginator'
import HomeOfferCards from '../components/HomeOfferCards'
import HomeBookCards from '../components/HomeBookCards'
import HomeTrendingSection from '../components/HomeTrendingSection'
import HomeExclusiveSection from '../components/HomeExclusiveSection'
import Fab from '../components/fab'

const HomeScreen = ({ navigation }) => {
    const [scrollX, setScrollX] = useState(0)
    return (
        <SafeAreaView style={styles.container}>
            <Fab current="Home" />
            <View style={styles.topBar}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginLeft: 15 }}>
                    <IonIcon color='white' size={25} name='location-outline' />
                    <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Alata' }}>Chennai</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 70, marginRight: 20 }}>
                    <MaterialCommunityIcons name='qrcode-scan' color='white' size={24} />
                    <FontAwesome name='user-circle-o' color='white' size={24} />
                </View>
            </View>
            <ScrollView >
                <Animated.View style={{ marginTop: 5 }}>
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
    }
})