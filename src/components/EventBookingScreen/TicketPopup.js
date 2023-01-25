import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectTicket, selectTicketTotal } from '../../../features/ticketSlice'
import { useNavigation } from '@react-navigation/native'
import Dimensions from '../../constants/Dimensions'

const TicketPopup = () => {
    const navigation = useNavigation()
    const tickets = useSelector(selectTicket)
    const ticketTotal = useSelector(selectTicketTotal)

    if (tickets.length === 0) return null
    
    return (
        <View style={{ zIndex: -1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 50, alignItems: 'center', justifyContent: 'flex-end' }}>
            <TouchableOpacity onPress={() => {navigation.navigate('EventTicketBasketScreen')}}>
                <View style={styles.ticketCart}>
                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold', fontSize: 22, backgroundColor: '#cc3d53', marginLeft: 10, paddingHorizontal: 5, paddingVertical: 2, borderRadius: 5 }}>{tickets.length}</Text>
                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-Bold', fontSize: 18 }}>View Cart</Text>
                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold', fontSize: 18, marginRight: 20 }}>INR {ticketTotal}</Text>
                </View>
            </TouchableOpacity>
        </View >
    )
}

export default TicketPopup

const styles = StyleSheet.create({
    ticketCart: {
        backgroundColor: '#FF4C68',
        flexDirection: 'row',
        borderRadius: 10,
        width: Dimensions.SCREEN_WIDTH / 1.2,
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})