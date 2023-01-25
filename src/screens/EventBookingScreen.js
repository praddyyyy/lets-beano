import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon, { Icons } from '../components/global/Icons'
import Dimensions from '../constants/Dimensions'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Categories from '../components/EventBookingScreen/Categories'
import TicketPopup from '../components/EventBookingScreen/TicketPopup'

const EventBookingScreen = () => {
    const navigation = useNavigation()
    const [selectStag, setSelectStag] = useState(false)
    const [selectLadies, setSelectLadies] = useState(false)
    const [selectCouple, setSelectCouple] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', marginBottom: 15, marginRight: 15 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Icon type={Icons.Ionicons} name='chevron-back-circle' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 5 }}>
                    {/* TODO add montserrat medium font */}
                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-Bold', fontSize: 18 }}>NEW YEAR PARTY</Text>
                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold' }}>Sun, 15-Nov-2023 at 08:00PM</Text>
                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold' }}>Le Ares</Text>
                </View>
            </View>
            <Divider width={1} />
            <View style={{ borderWidth: 1, borderColor: '#fff', borderRadius: 15, margin: 15 }}>
                <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold', fontSize: 18, marginVertical: 15 }}>Select Your Category</Text>
                    <Categories id={1} category={'Stag'} price={750} detail={'Each pass permits one stag to the event. Cover charges applicable at the venue throughout the event.'} />
                    <Categories id={2} category={'Ladies'} price={500} detail={'Each pass permits one lady to the event.'} />
                    <Categories id={3} category={'Couples'} price={1000} detail={'Each pass permits one couple to the event. Cover charges applicable at the venue post 09:00 PM.'} />
                </View>
            </View>
            <TicketPopup />
        </SafeAreaView>
    )
}

export default EventBookingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingVertical: 15
    }
})