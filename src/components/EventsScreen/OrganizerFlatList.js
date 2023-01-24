import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrganizerFlatList = (props) => {
    return (
        <FlatList
            data={props.data}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item, index }) => {
                return (
                    <View style={{ alignItems: 'center', margin: 15, width: 150 }}>
                        <Image source={{ uri: item.image }} style={{ height: 150, width: 150, borderRadius: 100 }} />
                        <Text style={{ color: '#fff', fontFamily: 'Blinker-SemiBold', marginTop: 10, fontSize: 20, textAlign: 'center' }}>{item.name}</Text>
                    </View>
                )
            }}
        />
    )
}

export default OrganizerFlatList

const styles = StyleSheet.create({})