import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const FilterSectionButton = (props) => {
    return (
        <TouchableOpacity style={{ backgroundColor: "#fff", height: 35, justifyContent: 'center', borderRadius: 50, width: '48%' }}>
            <Text style={{ textAlign: 'center' }}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default FilterSectionButton

const styles = StyleSheet.create({})