import { StyleSheet, KeyboardAvoidingView, View, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FilterDateSort from '../components/Global/FilterDateSort/FilterDateSort'
import Fab from '../components/Global/FAB'
import TopBar from '../components/Global/Topbar'
import { COLORS } from '../utils/ThemeColors'
import ClubFlatlist from '../components/ClubsScreen/ClubFlatlist'

import { clubsData } from '../utils/test-data'

// import { db } from '../../firebase-config'
// import { collection, getDocs } from "firebase/firestore";
// import SkeletonClubCard from '../components/ClubScreen/SkeletonClubCard'

const ClubsScreen = () => {
    // const [searchValue, setSearchValue] = useState('')


    // const [clubs, setClubs] = useState([])

    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     let unsubscribed = false;

    //     getDocs(collection(db, "clubs"))
    //         .then((querySnapshot) => {
    //             if (unsubscribed) return; // unsubscribed? do nothing.

    //             const newClubDataArray = querySnapshot.docs
    //                 .map((doc) => ({ ...doc.data(), id: doc.id }));

    //             setClubs(newClubDataArray);
    //             if (loading) {
    //                 setLoading(false)
    //             }
    //         })
    //         .catch((err) => {
    //             if (unsubscribed) return; // unsubscribed? do nothing.

    //             // TODO: Handle errors
    //             console.error("Failed to retrieve data", err);
    //         });

    //     return () => unsubscribed = true;
    // }, []);

    // console.log(clubs)


    // const loc = fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyDr27dLjec3h6AZ_uyfhRXzAmZmEyh7MGA`)
    //     .then((response) => response.json())
    //     .then((json) => {
    //         console.log(json)
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });

    // const handleSearch = (value) => {
    //     setSearchValue(value);
    //     if (value === '') {
    //         setData(DATA)
    //         return;
    //     }
    //     let tempList = DATA.filter((item) => {
    //         return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
    //     });
    //     setData(tempList);
    // };

    return (
        <SafeAreaView style={styles.container}>
            <TopBar />
            {/* <SearchBarReanimated handleSearch={handleSearch} placeholder="Search here..." /> */}
            <FilterDateSort type='clubs' />
            <ClubFlatlist data={clubsData} />
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
            <KeyboardAvoidingView behavior='height'>
                <Fab current='Club' bottom={40} />
            </KeyboardAvoidingView>
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
