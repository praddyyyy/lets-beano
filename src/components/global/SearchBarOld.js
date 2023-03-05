import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SearchBar } from 'react-native-elements'
import COLORS from '../../constants/Colors'

const SearchBarOld = (props) => {
    const [search, setSearch] = useState('')

    const searchHandler = (value) => {
        setSearch(value);
        props.handleSearch(value)
    }
    return (
        <SearchBar
            containerStyle={{
                backgroundColor: COLORS.black,
                borderBottomColor: 'transparent',
                borderTopColor: 'transparent',
                paddingHorizontal: 15,
                paddingVertical: 10
            }}
            inputContainerStyle={{
                // backgroundColor: '#fff',
                borderRadius: 15,
                // borderRadius: 50,
            }}
            placeholder={props.placeholder}
            onChangeText={searchHandler}
            value={search}
            lightTheme={false}
            searchIcon={{ color: COLORS.white, size: 24 }}
        />


    )
}

export default SearchBarOld

const styles = StyleSheet.create({})