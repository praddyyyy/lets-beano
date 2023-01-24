import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SearchBar } from 'react-native-elements'

const SearchBarOld = (props) => {
    const [search, setSearch] = useState('')

    const searchHandler = (value) => {
        setSearch(value);
        props.handleSearch(value)
    }
    return (
        <SearchBar
            containerStyle={{
                backgroundColor: '#1f1f1f',
                borderBottomColor: 'transparent',
                borderTopColor: 'transparent',
                borderRadius: 50
            }}
            inputContainerStyle={{
                backgroundColor: '#fff',
                borderRadius: 15,
                borderRadius: 50,
            }}
            placeholder={props.placeholder}
            onChangeText={searchHandler}
            value={search}
        />


    )
}

export default SearchBarOld

const styles = StyleSheet.create({})