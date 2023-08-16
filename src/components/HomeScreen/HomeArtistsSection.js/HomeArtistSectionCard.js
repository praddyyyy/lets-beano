import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const HomeArtistSectionCard = (props) => {
    const { item } = props

    return (
        <View style={{ height: 180, width: '47%', marginBottom: 45 }}>
            <Image source={item.image} style={{ height: '100%', width: '100%', borderTopRightRadius: 15, borderTopLeftRadius: 15 }} />
            <View style={{ borderBottomRightRadius: 15, borderBottomLeftRadius: 15, backgroundColor: '#000', borderColor: '#fff', borderBottomWidth: 0.3, borderStartWidth: 0.3, borderEndWidth: 0.3 }}>
                <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Montserrat_700Bold', paddingVertical: 5, textAlign: 'center' }}>{item.name}</Text>
            </View>
        </View>
    )
}

export default HomeArtistSectionCard

const styles = StyleSheet.create({})