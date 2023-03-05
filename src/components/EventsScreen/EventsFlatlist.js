import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import EventCard from './EventCard'

const EventsFlatlist = (props) => {
    return (
        <FlatList
            data={props.data}
            keyExtractor={(item) => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            bounces={false}
            renderItem={({ item, index }) => {
                return (
                    <>
                        <EventCard eventName={item.name} imageUri={item.image} eventAddress={item.address} eventPrice={item.price} />
                    </>
                )
            }}
        />
    )
}

export default EventsFlatlist

const styles = StyleSheet.create({})