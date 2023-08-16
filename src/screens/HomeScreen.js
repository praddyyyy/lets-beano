import { StyleSheet, ScrollView, RefreshControl } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../components/HomeScreen/TopBar'

import { COLORS } from '../utils/ThemeColors'
import Dimensions from '../utils/Dimensions'
import { StatusBar } from 'expo-status-bar'
import { moderateScale } from 'react-native-size-matters'
import CustomSearchBar from '../components/Global/CustomSearchBar'
import AdFlatList from '../components/HomeScreen/AdFlatList/AdFlatList'
import Fab from '../components/Global/FAB'
import HomeOfferCards from '../components/HomeScreen/HomeOfferCards'

import { homePopularLocations, EventsData, homeClubsData } from '../utils/test-data'
import HomeBookCards from '../components/HomeScreen/HomeBookCards'
import HomeTrendingSection from '../components/HomeScreen/HomeTrendingSection'
import HomeExclusiveSection from '../components/HomeScreen/HomeExclusiveSection'
import HomePopularLocations from '../components/HomeScreen/HomePopularLocations'
import HomeExploreCuisine from '../components/HomeScreen/HomeExploreCuisine'

import LottieView from 'lottie-react-native';

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { fetchHomeCarouselDataFromFirestore } from '../redux/features/home/homeCarouselSlice'
import { fetchHomeOffersDataFromFirestore } from '../redux/features/home/homeOffersSlice'
import { fetchHomeTrendingDataFromFirestore } from '../redux/features/home/homeTrendingSlice'
import { fetchHomeExclusiveDataFromFirestore } from '../redux/features/home/homeExclusiveSlice'
import HomeClubsSection from '../components/HomeScreen/HomeClubSection/HomeClubsSection'
import HomeEventSection from '../components/HomeScreen/HomeEventSection/HomeEventSection'
import HomeArtistsSection from '../components/HomeScreen/HomeArtistsSection.js/HomeArtistsSection'

const HomeScreen = () => {
    const animation = useRef(null);

    const dispatch = useDispatch()
    const { homeCarousel, loading: homeCarouselLoading, error: homeCarouselError } = useSelector(state => state.homeCarousel)
    const { homeOffers, loading: homeOffersLoading, error: homeOffersError } = useSelector(state => state.homeOffers)
    const { homeTrending, loading: homeTrendingLoading, error: homeTrendingError } = useSelector(state => state.homeTrending)
    const { homeExclusive, loading: homeExclusiveLoading, error: homeExclusiveError } = useSelector(state => state.homeExclusive)

    useEffect(() => {
        dispatch(fetchHomeCarouselDataFromFirestore())
        dispatch(fetchHomeOffersDataFromFirestore())
        dispatch(fetchHomeTrendingDataFromFirestore())
        dispatch(fetchHomeExclusiveDataFromFirestore())
    }, [])

    const [refreshing, setRefreshing] = useState(false);
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (value) => {
        setSearchValue(value);
    };

    const onRefresh = async () => {
        // setRefreshing(true)
        // sethomeCarouselLoading(true)
        // setHomeOffersLoading(true)
        // setHomeTrendingLoading(true)
        // setHomeExclusiveLoading(true)
        // fetchHomeCarouselData();
        // fetchHomeOffersData();
        // fetchHomeTrendingData();
        // fetchHomeExclusiveData();
        setRefreshing(false)
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='light' backgroundColor='#000' />
            <ScrollView stickyHeaderIndices={[1]} contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl progressViewOffset={moderateScale(130, Dimensions.SCALING_FACTOR)} refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <TopBar />
                <CustomSearchBar handleSearch={handleSearch} placeholder="Search Events, Clubs, DJs..." />
                {
                    homeCarouselLoading || homeOffersLoading || homeTrendingLoading || homeExclusiveLoading ?
                        <LottieView
                            autoPlay
                            ref={animation}
                            style={{
                                width: 100,
                                height: 100,
                                alignSelf: 'center',
                                justifyContent: 'center',
                            }}
                            source={require('../../assets/lottie/loading-main.json')}
                        />
                        :
                        <>
                            <AdFlatList data={homeCarousel} />
                            <HomeOfferCards data={homeOffers} />
                            <HomeTrendingSection data={homeTrending} />
                            <HomeBookCards />
                            <HomeExclusiveSection data={homeExclusive} />
                            <HomePopularLocations data={homePopularLocations} />
                            <HomeEventSection data={EventsData} />
                            <HomeExploreCuisine />
                            <HomeClubsSection data={homeClubsData} />
                            <HomeArtistsSection />
                        </>
                }
            </ScrollView>
            <Fab current='Home' bottom={40} />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    scrollView: {
        paddingBottom: 150,
    }
})