import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Dimensions from '../../utils/Dimensions'
import { Icon } from '@rneui/themed'
import { moderateScale } from 'react-native-size-matters'

const HomeEventSectionCard = (props) => {
    const [data, setData] = useState(props.item)
    return (
        <View style={{ display: 'flex', backgroundColor: '#000', borderRadius: 15, height: '100%', width: Dimensions.SCREEN_WIDTH * 0.6, marginRight: 15, borderWidth: 0.5, borderColor: '#fff' }}>
            <View style={{ height: '80%' }}>
                <Image style={{ width: '100%', height: '100%', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} source={{ uri: data.image }} />
                <View style={{ position: 'absolute', bottom: 10, left: 10 }}>
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Montserrat_700Bold' }}>{data.name}</Text>
                    <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'Montserrat_600SemiBold' }}>Featuring DJ Sparrow</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', borderBottomRightRadius: 15, borderBottomLeftRadius: 15, justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', height: '100%', width: '50%' }}>
                    <Icon type='ionicon' name='ios-location' color='white' size={moderateScale(18, Dimensions.SCALING_FACTOR)} />
                    <View style={{ flex: 1, height: '100%', alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'Montserrat_700Bold' }}>Le Ares</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%', width: '50%' }}>
                    <Icon type='ionicon' name='calendar' color='white' style={{ marginRight: 5 }} size={moderateScale(18, Dimensions.SCALING_FACTOR)} />
                    <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'Montserrat_700Bold', textAlign: 'center' }}>Sun, 20 Nov</Text>
                </View>
            </View>
        </View >
    )
}

export default HomeEventSectionCard

const styles = StyleSheet.create({})