import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FilterDateSort from '../components/global/FliterDateSort'
import ClubFlatlist from '../components/ClubScreen/ClubFlatlist'
import Fab from '../components/global/Fab'
import TopBar from '../components/global/TopBar'
import SearchBarComponent from '../components/SearchBar'
import SearchBarReanimated from '../components/SearchBarReanimated'
import DATA from '../constants/clubs'
import SearchBarOld from '../components/global/SearchBarOld'

const ClubsScreen = () => {
    const [searchValue, setSearchValue] = useState('')

    const [data, setData] = useState(DATA)

    const handleSearch = (value) => {
        setSearchValue(value);
        if (value === '') {
            setData(DATA)
            return;
        }
        let tempList = DATA.filter((item) => {
            return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
        });
        setData(tempList);
    };
    return (
        <SafeAreaView style={styles.container}>
                <TopBar />
                {/* <SearchBarReanimated handleSearch={handleSearch} placeholder="Search here..." /> */}
                <FilterDateSort type='clubs' />
                <ClubFlatlist data={data} />
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
        backgroundColor: '#1f1f1f',
    },
})