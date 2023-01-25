import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon, { Icons } from '../global/Icons'
import Dimensions from '../../constants/Dimensions'
import { addTicket, removeTicket, selectTicketWithId } from '../../../features/ticketSlice'

const Categories = ({ id, category, price, detail }) => {
    const dispatch = useDispatch()
    const tickets = useSelector(state => selectTicketWithId(state, id))
    const [isSelected, setIsSelected] = useState(false)

    const addTicketToBasket = () => {
        dispatch(addTicket({
            id,
            category,
            price,
            detail
        }))
    }

    const removeTicketFromBasket = () => {
        if (!tickets.length > 0) {
            return
        }
        dispatch(removeTicket({ id }))
    }

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <View>
                    <Text style={{ color: '#fff', fontFamily: 'Montserrat', fontSize: 18 }}>{category}</Text>
                    <Text style={{ color: '#fff', fontFamily: 'Montserrat', fontSize: 18 }}>INR {price}</Text>
                </View>
                {
                    tickets.length > 0 ? (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={removeTicketFromBasket}>
                                <Icon type={Icons.EvilIcons} name='minus' color='#FF4C68' size={Dimensions.SCREEN_HEIGHT * 0.045} />
                            </TouchableOpacity>
                            <Text style={{ color: '#FF4C68', fontFamily: 'Montserrat', paddingHorizontal: 10, fontSize: 24 }}>{tickets.length}</Text>
                            <TouchableOpacity onPress={addTicketToBasket}>
                                <Icon type={Icons.EvilIcons} name='plus' color='#FF4C68' size={Dimensions.SCREEN_HEIGHT * 0.045} />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <TouchableOpacity onPress={addTicketToBasket}>
                            <View style={{ borderRadius: 50, borderWidth: 1, borderColor: '#FF4C68', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#FF4C68', fontFamily: 'Montserrat', paddingHorizontal: 15, paddingVertical: 2 }}>ADD</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
            </View>
            {/* TODO detail down arrow animation */}
            <View style={{ marginBottom: 15 }}>
                <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start' }}>
                        <Text style={{ fontFamily: 'Montserrat-SemiBold', color: '#FF4C68' }}>Details</Text>
                        <Icon type={Icons.Entypo} name='chevron-down' color='#FF4C68' size={Dimensions.SCREEN_HEIGHT * 0.025} />
                    </View>
                </TouchableOpacity>
                {/* FIXME ticket length console logging when expanding and closing details */}
                {isSelected &&
                    <View>
                        <Text style={{ color: '#fff', fontFamily: 'Blinker' }}>{detail}</Text>
                    </View>
                }
            </View>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({})