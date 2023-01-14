import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DATA from '../constants/clubs'
import ClubCard from './ClubCard'

const ClubFlatlist = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <ClubCard source={item.src} clubName={item.name} clubRating={item.rating} clubHighlights={item.highlights} clubLocation={item.location} />
                    )
                }}
            />
        </View>
    )
}

export default ClubFlatlist

const styles = StyleSheet.create({})