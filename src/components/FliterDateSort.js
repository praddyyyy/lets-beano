import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IonIcons from 'react-native-vector-icons/Ionicons'
const FliterDateSort = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white' }}>
                <Text style={{ fontSize: 18, fontFamily: 'Alata', color: 'white', marginRight: 10, bottom: 3}}>Filter</Text>
                <MaterialCommunityIcons name='tune' color='white' size={20} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white' }}>
                <Text style={{ fontSize: 18, fontFamily: 'Alata', color: 'white', marginRight: 10, bottom: 3 }}>08 May</Text>
                <MaterialCommunityIcons name='calendar-month' color='white' size={20} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white' }}>
                <Text style={{ fontSize: 18, fontFamily: 'Alata', color: 'white', marginRight: 10, bottom: 3 }}>Sort</Text>
                <IonIcons name='swap-vertical' color='white' size={20} />
            </View>
        </View>
    )
}

export default FliterDateSort

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})