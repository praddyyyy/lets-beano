import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { moderateScale } from 'react-native-size-matters'
import Dimensions from '../../../utils/Dimensions'

const HomeClubSectionCard = (props) => {
    const { item } = props

    return (
        <View style={{ height: 180, flex: 1, flexDirection: 'column', width: '100%', marginBottom: 15, borderRadius: 15, backgroundColor: '#fff' }}>
            <View style={{ height: '85%' }}>
                <Image style={{ height: '100%', width: '100%', borderRadius: 15 }} source={item.image} />
                <View style={styles.rate}>
                    <Icon type='ant-design' name='star' color='gold' size={moderateScale(15, Dimensions.SCALING_FACTOR)} />
                    <Text style={{ color: 'black', fontSize: 13, fontFamily: 'Montserrat_700Bold' }}>{item.rating}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 2 }}>
                <View>
                    <Text style={{ color: '#000', fontSize: 18, fontFamily: 'Montserrat_600SemiBold', }}>{item.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon type='ionicon' name='ios-location' color='#000' size={moderateScale(16, Dimensions.SCALING_FACTOR)} />
                    <Text style={{ color: '#000', fontSize: 14, fontFamily: 'Montserrat_500Medium', }}>Chennai</Text>
                </View>
            </View>
        </View>
    )
}

export default HomeClubSectionCard

const styles = StyleSheet.create({
    rate: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        height: moderateScale(18, Dimensions.SCALING_FACTOR),
        width: moderateScale(40, Dimensions.SCALING_FACTOR),
        borderRadius: 50,
        paddingHorizontal: moderateScale(2, Dimensions.SCALING_FACTOR),
        bottom: 10,
        right: 15,
    },
})