import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import FliterDateSort from '../components/FliterDateSort'
import ClubFlatlist from '../components/ClubFlatlist'
import Fab from '../components/fab'

const ClubScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Fab current='Club' />
            <View style={styles.topBar}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <IonIcon color='white' size={32} name='chevron-back-circle' />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Alata', marginLeft: 5 }}>Kalavakkam, Chennai</Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('SearchScreen') }}>
                    <IonIcon color='white' size={30} name='search-outline' />
                </TouchableOpacity>
            </View>
            <FliterDateSort />
            <ClubFlatlist />
        </SafeAreaView>
    )
}

export default ClubScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f1f',
    },
    topBar: {
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginHorizontal: 15,
    }
})