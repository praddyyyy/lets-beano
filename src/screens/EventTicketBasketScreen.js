import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon, { Icons } from '../components/global/Icons'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectTicket, removeTicket, selectTicketTotal } from '../../features/ticketSlice'

const EventTicketBasketScreen = () => {
  const navigation = useNavigation()
  const tickets = useSelector(selectTicket)
  const cartTotal = useSelector(selectTicketTotal)
  const dispatch = useDispatch()
  const [groupedTicketsInCart, setGroupedTicketsInCart] = useState([])

  const bookingFee = tickets.length * 20

  useEffect(() => {
    const groupedTickets = tickets.reduce((results, ticket) => {
      (results[ticket.id] = results[ticket.id] || []).push(ticket)
      return results
    }, {})

    setGroupedTicketsInCart(groupedTickets)
  }, [tickets])

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ position: 'absolute', top: 15, right: 25 }}>
            <Icon type={Icons.Feather} name='x-circle' size={24} color={'#fff'} />
          </View>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, paddingTop: 15 }}>
          <Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold', fontSize: 18, marginBottom: 8 }}>TICKET REVIEW</Text>
          <Text style={{ color: '#999999', fontFamily: 'Montserrat-SemiBold', fontSize: 14 }}>Danush's</Text>
        </View>
        <Divider width={1} />
        <View style={{ borderColor: '#fff', borderWidth: 1, borderRadius: 15, margin: 15 }}>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold', fontSize: 18, marginVertical: 8, textAlign: 'center' }}>NEW YEAR PARTY</Text>

            <Divider width={1} />

            <Text style={{ color: '#fff', fontFamily: 'Montserrat', fontSize: 14, marginTop: 8, textAlign: 'center' }}>Sun, 15-Nov-2023 at 8:00 PM</Text>
            <Text style={{ color: '#fff', fontFamily: 'Montserrat', fontSize: 14, marginBottom: 8, textAlign: 'center' }}>Le Ares</Text>

            <Divider width={1} />

            {
              Object.entries(groupedTicketsInCart).map(([key, ticket]) => (
                <View key={key} style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'flex-end', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 20 }}>{ticket.length} x Couples</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16, paddingHorizontal: 10 }}>INR {ticket[0]?.price}</Text>
                    <TouchableOpacity onPress={() => dispatch(removeTicket({ "id": parseInt(key) }))}>
                      <Text style={{ color: '#ff4c68', fontFamily: 'Blinker', fontSize: 16 }}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: '#fff', paddingBottom: 20, paddingHorizontal: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
          <Text style={{ color: '#b3b3b3', fontFamily: 'Blinker-SemiBold', fontSize: 16 }}>Subtotal</Text>
          <Text style={{ color: '#b3b3b3', fontFamily: 'Blinker-Bold', fontSize: 16 }}>INR {cartTotal}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
          <Text style={{ color: '#b3b3b3', fontFamily: 'Blinker-SemiBold', fontSize: 16 }}>Booking Fee</Text>
          <Text style={{ color: '#b3b3b3', fontFamily: 'Blinker-Bold', fontSize: 16 }}>INR {bookingFee}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
          <Text style={{ color: '#000', fontFamily: 'Blinker-SemiBold', fontSize: 16 }}>Order Total</Text>
          <Text style={{ color: '#000', fontFamily: 'Blinker-Bold', fontSize: 16 }}>INR {cartTotal + bookingFee}</Text>
        </View>
        {
          tickets.length === 0 ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={{ backgroundColor: '#ff4c68', borderRadius: 15, marginVertical: 15, paddingVertical: 15 }}>
                <Text style={{ color: '#fff', fontFamily: 'Montserrat-Bold', textAlign: 'center', fontSize: 18 }}>GO BACK</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <View style={{ backgroundColor: '#ff4c68', borderRadius: 15, marginVertical: 15, paddingVertical: 15 }}>
                <Text style={{ color: '#fff', fontFamily: 'Montserrat-Bold', textAlign: 'center', fontSize: 18 }}>PLACE ORDER</Text>
              </View>
            </TouchableOpacity>
          )

        }
      </View>
    </SafeAreaView >
  )
}

export default EventTicketBasketScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'space-between'
  }
})