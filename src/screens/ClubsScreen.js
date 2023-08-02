import { StyleSheet, KeyboardAvoidingView, View, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FilterDateSort from '../components/Global/FilterDateSort/FilterDateSort'
import Fab from '../components/Global/FAB'
import TopBar from '../components/Global/Topbar'
import { COLORS } from '../utils/ThemeColors'
import ClubFlatlist from '../components/ClubsScreen/ClubFlatlist'
// import { db } from '../../firebase-config'
// import { collection, getDocs } from "firebase/firestore";
// import SkeletonClubCard from '../components/ClubScreen/SkeletonClubCard'

import { useDispatch, useSelector } from 'react-redux';
import { fetchClubDataFromFirestore } from '../redux/features/clubDataSlice'

const ClubsScreen = () => {
    const dispatch = useDispatch()
    const { clubData, loading, error } = useSelector(state => state.clubData)

    const { priceFilter } = useSelector(state => state.clubFilter)
    const { sortBy, sortOrder } = useSelector((state) => state.clubSort);

    useEffect(() => {
        dispatch(fetchClubDataFromFirestore())
    }, [priceFilter, sortBy, sortOrder])

    // Helper function to apply filtering based on filter options
    const applyFilters = (data) => {
        return data.filter((item) => {
            // Apply price filter
            if (priceFilter && priceFilter.length === 2) {
                const [minPrice, maxPrice] = priceFilter;
                if (item.price < minPrice || item.price > maxPrice) {
                    return false;
                }
            }

            // // Apply rating filter
            // if (ratingFilter && item.rating !== parseFloat(ratingFilter)) {
            //     return false;
            // }

            // // Apply tags filter
            // if (tagsFilter.length > 0) {
            //     // Check if any tag from tagsFilter exists in item.tags array
            //     const matchedTags = item.tags.filter((tag) =>
            //         tagsFilter.includes(tag)
            //     );
            //     if (matchedTags.length === 0) {
            //         return false;
            //     }
            // }

            return true; // If all filters match, include the item in the filtered data
        });
    };

    const applySorting = (data) => {
        return data.sort((a, b) => {
            const aValue = a[sortBy];
            const bValue = b[sortBy];

            // Check if the values are numeric
            const isNumeric =
                !isNaN(aValue) && !isNaN(bValue) && typeof aValue === 'number' && typeof bValue === 'number';

            if (isNumeric) {
                if (sortOrder === 'asc') {
                    return aValue - bValue;
                } else if (sortOrder === 'desc') {
                    return bValue - aValue;
                }
            } else {
                // For non-numeric values, use localeCompare for string comparison
                if (sortOrder === 'asc') {
                    return String(aValue).localeCompare(String(bValue));
                } else if (sortOrder === 'desc') {
                    return String(bValue).localeCompare(String(aValue));
                }
            }

            return 0; // If values are equal or not comparable, maintain their original order
        });
    };

    const filteredClubData = applyFilters(clubData);
    const sortedClubData = applySorting(filteredClubData);

    return (
        <SafeAreaView style={styles.container}>
            <TopBar type='clubs' length={sortedClubData.length} />
            {/* <SearchBarReanimated handleSearch={handleSearch} placeholder="Search here..." /> */}
            <FilterDateSort type='clubs' />
            {
                loading ? <></> :
                    <>
                        <ClubFlatlist data={sortedClubData} />
                        <KeyboardAvoidingView behavior='height'>
                            <Fab current='Club' bottom={40} />
                        </KeyboardAvoidingView>
                    </>
            }
            {/* {
                loading ? (
                    <View style={{ flex: 1, padding: 15 }}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            <SkeletonClubCard />
                            <SkeletonClubCard />
                            <SkeletonClubCard />
                            <SkeletonClubCard />
                            <SkeletonClubCard />
                        </ScrollView>
                    </View>
                ) : (

                    <ClubFlatlist data={clubs} />
                )} */}
        </SafeAreaView>
    )
}

export default ClubsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
})
