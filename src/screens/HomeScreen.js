import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../components/HomeScreen/TopBar'
// import SearchBarOld from '../components/global/SearchBarOld'
// import AdFlatList from '../components/HomeScreen/AdFlatList'
// import HomeBookCards from '../components/HomeScreen/HomeBookCards'
// import HomeOfferCards from '../components/HomeScreen/HomeOfferCards'
// import HomeTrendingSection from '../components/HomeScreen/HomeTrendingSection'
// import HomeExclusiveSection from '../components/HomeScreen/HomeExclusiveSection'
// import Fab from '../components/global/Fab'
import { COLORS } from '../utils/ThemeColors'
import Dimensions from '../utils/Dimensions'
import { StatusBar } from 'expo-status-bar'
import { moderateScale } from 'react-native-size-matters'
import CustomSearchBar from '../components/Global/CustomSearchBar'
import AdFlatList from '../components/HomeScreen/AdFlatList/AdFlatList'
import Fab from '../components/Global/FAB'
import HomeOfferCards from '../components/HomeScreen/HomeOfferCards'

import { homePopularLocations, EventsData } from '../utils/test-data'
import HomeBookCards from '../components/HomeScreen/HomeBookCards'
import HomeTrendingSection from '../components/HomeScreen/HomeTrendingSection'
import HomeExclusiveSection from '../components/HomeScreen/HomeExclusiveSection'
import HomePopularLocations from '../components/HomeScreen/HomePopularLocations'
import HomeEventSection from '../components/HomeScreen/HomeEventSection'
import HomeExploreCuisine from '../components/HomeScreen/HomeExploreCuisine'

import { getDocs, collection, doc, query, where } from 'firebase/firestore'
import { db } from '../../firebase-config'
import LottieView from 'lottie-react-native';

// import SkeletonCarouselCard from '../components/HomeScreen/SkeletonCarouselCard'
// import SkeletonOffersCard from '../components/HomeScreen/SkeletonOffersCard'
// import SkeletonTrendingCard from '../components/HomeScreen/SkeletonTrendingCard'
// import SkeletonExclusiveCard from '../components/HomeScreen/SkeletonExclusiveCard'
// import HomeHotspotCard from '../components/HomeScreen/HomeHotspotCard'

const HomeScreen = () => {
    const animation = useRef(null);
    const [refreshing, setRefreshing] = useState(false);
    const [searchValue, setSearchValue] = useState('')

    const [homeCarouselLoading, sethomeCarouselLoading] = useState(true)
    const [homeOffersLoading, setHomeOffersLoading] = useState(true)
    const [homeTrendingLoading, setHomeTrendingLoading] = useState(true)
    const [homeExclusiveLoading, setHomeExclusiveLoading] = useState(true)

    const [homeCarousel, setHomeCarousel] = useState([])
    const [homeOffers, setHomeOffers] = useState([])
    const [homeTrending, setHomeTrending] = useState([])
    const [homeExclusive, setHomeExclusive] = useState([])

    const [allDataLoaded, setAllDataLoaded] = useState(false)

    const fetchHomeCarouselData = async () => {
        const carouselArr = []
        const querySnapshot = await getDocs(collection(db, "home_carousel"));
        querySnapshot.forEach((doc) => {
            const { image, reference, title } = doc.data();
            carouselArr.push({
                key: doc.id,
                image,
                reference,
                title
            })
        });
        setHomeCarousel(carouselArr)
        sethomeCarouselLoading(false)
    }


    const fetchHomeOffersData = async () => {
        const offersArr = []
        const querySnapshot = await getDocs(collection(db, "home_offers"));
        querySnapshot.forEach((doc) => {
            const { description, image, reference, title } = doc.data();
            offersArr.push({
                key: doc.id,
                description,
                image,
                reference,
                title
            })
        });
        setHomeOffers(offersArr)
        setHomeOffersLoading(false)
    }

    const fetchHomeTrendingData = async () => {
        const trendingArr = []
        const querySnapshot = await getDocs(collection(db, "home_trending"));
        querySnapshot.forEach((doc) => {
            const { image } = doc.data();
            trendingArr.push({
                key: doc.id,
                image
            })
        });
        setHomeTrending(trendingArr)
        setHomeTrendingLoading(false)
    }

    const fetchHomeExclusiveData = async () => {
        const exclusiveArr = []
        const querySnapshot = await getDocs(collection(db, "home_exclusive"));
        querySnapshot.forEach((doc) => {
            const { image, title } = doc.data();
            exclusiveArr.push({
                key: doc.id,
                title,
                image
            })
        });
        setHomeExclusive(exclusiveArr)
        setHomeExclusiveLoading(false)
    }


    useEffect(() => {
        const fetchData = async () => {
            await fetchHomeCarouselData();
            await fetchHomeOffersData();
            await fetchHomeTrendingData();
            await fetchHomeExclusiveData();
            setAllDataLoaded(true)
        }
        fetchData()
    }, []);

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
            <StatusBar hidden={true} />
            <ScrollView stickyHeaderIndices={[1]} contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl progressViewOffset={moderateScale(130, Dimensions.SCALING_FACTOR)} refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <TopBar />
                <CustomSearchBar handleSearch={handleSearch} placeholder="Search Events, Clubs, DJs..." />
                {
                    allDataLoaded ?
                        <>
                            <AdFlatList data={homeCarousel} />
                            <HomeOfferCards data={homeOffers} />
                            <HomeTrendingSection data={homeTrending} />
                            <HomeExclusiveSection data={homeExclusive} />
                            <HomeBookCards />
                            <HomePopularLocations data={homePopularLocations} />
                            <HomeEventSection data={EventsData} />
                            <HomeExploreCuisine />
                        </>
                        :
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
                }
                {/* {
                    (homeCarouselLoading && !refreshing) ? <></> : <AdFlatList data={homeCarousel} />
                }
                {
                    (homeOffersLoading && !refreshing) ? <></> : <HomeOfferCards data={homeOffers} />
                }
                {
                    (homeTrendingLoading && !refreshing) ? <></> : <HomeTrendingSection data={homeTrending} />
                }
                {
                    (homeExclusiveLoading && !refreshing) ? <></> : <HomeExclusiveSection data={homeExclusive} />
                }
                <HomeBookCards />
                <HomePopularLocations data={homePopularLocations} />
                <HomeEventSection data={EventsData} />
                <HomeExploreCuisine /> */}
                {/*
                {
                    (homeCarouselLoading && !refreshing) ? <SkeletonCarouselCard /> : <AdFlatList data={homeCarousel} />
                }
                {
                    (homeOffersLoading && !refreshing) ? <SkeletonOffersCard /> : <HomeOfferCards data={homeOffers} />
                }
                {
                    (homeTrendingLoading && !refreshing) ? <SkeletonTrendingCard /> : <HomeTrendingSection data={homeTrending} />
                }
                {
                    (homeExclusiveLoading && !refreshing) ? <SkeletonExclusiveCard /> : <HomeExclusiveSection data={homeExclusive} />
                }
                <HomeHotspotCard /> */}
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