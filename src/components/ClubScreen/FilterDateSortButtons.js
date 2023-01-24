import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon, { Icons } from '../global/Icons'

const FilterDateSortButtons = (props) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#fff' }}>
            <TouchableOpacity onPress={props.pressHandler}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Alata', color: 'white', marginRight: 10, bottom: 3 }}>{props.text}</Text>
                    <Icon type={Icons.MaterialCommunityIcons} name={props.icon} color='white' size={20} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default FilterDateSortButtons

const styles = StyleSheet.create({})