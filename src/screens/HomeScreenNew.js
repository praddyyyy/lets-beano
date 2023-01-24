import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'
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

const HomeScreenNew = () => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (value) => {
        setSearchValue(value);
    };
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

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
                <AdFlatList />
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