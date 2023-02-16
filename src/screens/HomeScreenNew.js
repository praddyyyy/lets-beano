import { View, StyleSheet, ScrollView, RefreshControl, Text } from 'react-native'
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
import { Divider } from 'react-native-elements'
import Dimensions from '../constants/Dimensions'
import { collection, getDocs, doc, query } from 'firebase/firestore'
import { db } from '../../firebase-config'
import SkeletonCarouselCard from '../components/HomeScreen/SkeletonCarouselCard'

const HomeScreenNew = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [searchValue, setSearchValue] = useState('')
    const [homeCarouselLoading, sethomeCarouselLoading] = useState(true)
    const [homeCarousel, setHomeCarousel] = useState([])
    const [homeOffers, setHomeOffers] = useState([])

    // useEffect(() => {
    //     let unsubscribed = false;

    //     getDocs(collection(db, "home_carousel"))
    //         .then((querySnapshot) => {
    //             if (unsubscribed) return; // unsubscribed? do nothing.

    //             const newHomeCarouselArray = querySnapshot.docs
    //                 .map((document) => {
    //                     console.log(document.data().reference)
    //                     const clubRef = doc(document.data().reference)
    //                     console.log(clubRef)
    //                     return { ...document.data(), id: document.id }
    //                 }
    //                 );
    //             setHomeCarousel(newHomeCarouselArray);
    //             if (homeCarouselLoading) {
    //                 sethomeCarouselLoading(false)
    //             }
    //         })
    //         .catch((err) => {
    //             if (unsubscribed) return; // unsubscribed? do nothing.
    //             // TODO: Handle errors
    //             console.error("Failed to retrieve data", err);
    //         })
    //     return () => unsubscribed = true;
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            const q = query(collection(db, "home_carousel"))
            const querySnapshot = await getDocs(q)
            const newHomeCarouselArray = querySnapshot.docs
                .map((document) => {
                    // console.log(document.data().reference)
                    // const clubRef = doc(document.data().reference)
                    // console.log(clubRef)
                    // console.log(doc(document.data().reference))
                    return { ...document.data(), id: document.id }
                }
                );
            setHomeCarousel(newHomeCarouselArray);
            if (homeCarouselLoading) {
                sethomeCarouselLoading(false)
            }
        };

        fetchData();
    }, []);


    const handleSearch = (value) => {
        setSearchValue(value);
    };
    // TODO check the refresh control homeCarouselLoading time (have to wait for 1 sec to load the data beacause used setTimeout)

    const fetchData = async () => {
        sethomeCarouselLoading(true)
        const q = query(collection(db, "home_carousel"))
        const querySnapshot = await getDocs(q)
        const newHomeCarouselArray = querySnapshot.docs
            .map((document) => {
                return { ...document.data(), id: document.id }
            }
            );
        setHomeCarousel(newHomeCarouselArray);
        // sethomeCarouselLoading(false)
        setTimeout(() => {
            sethomeCarouselLoading(false)
        }
            , 1000);
    };

    const onRefresh = async () => {
        setRefreshing(true)
        sethomeCarouselLoading(true)
        await fetchData();
        setRefreshing(false)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView stickyHeaderIndices={[1]} contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl progressViewOffset={Dimensions.SCREEN_HEIGHT * 0.19} refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View style={{ paddingHorizontal: 15 }}>
                    <TopBar />
                </View>
                <View style={{ backgroundColor: '#1f1f1f', paddingHorizontal: 15, paddingBottom: 15 }}>
                    <SearchBarOld handleSearch={handleSearch} placeholder="Search Events, Clubs, DJs..." />
                </View>
                {
                    (homeCarouselLoading && !refreshing) ? <SkeletonCarouselCard /> : <AdFlatList data={homeCarousel} />

                }
                <HomeOfferCards />
                <Divider width={1.5} style={{ top: 40 }} />
                <HomeBookCards />
                <HomeTrendingSection />
                <HomeExclusiveSection />
            </ScrollView>
            <Fab current='Home' bottom={40} />
        </SafeAreaView>
    )
}

export default HomeScreenNew

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f1f',
    }
})