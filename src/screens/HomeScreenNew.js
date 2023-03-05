import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../components/HomeScreen/TopBar'
import SearchBarOld from '../components/global/SearchBarOld'
import AdFlatList from '../components/HomeScreen/AdFlatList'
import HomeBookCards from '../components/HomeScreen/HomeBookCards'
import HomeOfferCards from '../components/HomeScreen/HomeOfferCards'
import HomeTrendingSection from '../components/HomeScreen/HomeTrendingSection'
import HomeExclusiveSection from '../components/HomeScreen/HomeExclusiveSection'
import Fab from '../components/global/Fab'
import Dimensions from '../constants/Dimensions'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'
import SkeletonCarouselCard from '../components/HomeScreen/SkeletonCarouselCard'
import COLORS from '../constants/Colors'
import SkeletonOffersCard from '../components/HomeScreen/SkeletonOffersCard'
import SkeletonTrendingCard from '../components/HomeScreen/SkeletonTrendingCard'
import SkeletonExclusiveCard from '../components/HomeScreen/SkeletonExclusiveCard'
import HomeHotspotCard from '../components/HomeScreen/HomeHotspotCard'

const HomeScreenNew = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [searchValue, setSearchValue] = useState('')
    const [homeCarousel, setHomeCarousel] = useState([])
    const [homeCarouselLoading, sethomeCarouselLoading] = useState(true)
    const [homeOffers, setHomeOffers] = useState([])
    const [homeOffersLoading, setHomeOffersLoading] = useState(true)
    const [homeTrending, setHomeTrending] = useState([])
    const [homeTrendingLoading, setHomeTrendingLoading] = useState(true)
    const [homeExclusive, setHomeExclusive] = useState([])
    const [homeExclusiveLoading, setHomeExclusiveLoading] = useState(true)


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
        fetchHomeCarouselData();
        fetchHomeOffersData();
        fetchHomeTrendingData();
        fetchHomeExclusiveData();
    }, []);


    const handleSearch = (value) => {
        setSearchValue(value);
    };

    const onRefresh = async () => {
        setRefreshing(true)
        sethomeCarouselLoading(true)
        setHomeOffersLoading(true)
        setHomeTrendingLoading(true)
        setHomeExclusiveLoading(true)
        fetchHomeCarouselData();
        fetchHomeOffersData();
        fetchHomeTrendingData();
        fetchHomeExclusiveData();
        setRefreshing(false)
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView stickyHeaderIndices={[1]} contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl progressViewOffset={Dimensions.SCREEN_HEIGHT * 0.19} refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View style={{ paddingHorizontal: 15 }}>
                    <TopBar />
                </View>
                <SearchBarOld handleSearch={handleSearch} placeholder="Search Events, Clubs, DJs..." />
                {
                    (homeCarouselLoading && !refreshing) ? <SkeletonCarouselCard /> : <AdFlatList data={homeCarousel} />
                }
                {
                    (homeOffersLoading && !refreshing) ? <SkeletonOffersCard /> : <HomeOfferCards data={homeOffers} />
                }
                <HomeBookCards />
                {
                    (homeTrendingLoading && !refreshing) ? <SkeletonTrendingCard /> : <HomeTrendingSection data={homeTrending} />
                }
                {
                    (homeExclusiveLoading && !refreshing) ? <SkeletonExclusiveCard /> : <HomeExclusiveSection data={homeExclusive} />
                }
                <HomeHotspotCard />
            </ScrollView>
            <Fab current='Home' bottom={40} />
        </SafeAreaView>
    )
}

export default HomeScreenNew

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
    },

    scrollView: {
        paddingBottom: 150,
    }
})