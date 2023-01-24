import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Dimensions from '../../constants/Dimensions'
import FoodMenuItem from './FoodMenuItem'
import BeveragesMenuItem from './BeveragesMenuItem'

const MenuTab = () => {

    const [activeTab, setActiveTab] = React.useState('Food')

    const clickHandler = () => {
        setActiveTab('Food')
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', borderColor: 'white', borderWidth: 1, width: Dimensions.SCREEN_WIDTH * 0.4, marginBottom: 30, marginTop: 30, borderRadius: 50, justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={clickHandler} style={{ backgroundColor: activeTab == 'Food' ? 'white' : 'black', width: '50%', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, padding: 5 }}>
                    <Text style={{ textAlign: 'center', color: activeTab == 'Food' ? 'black' : 'white', fontFamily: 'Montserrat-SemiBold', fontSize: 12 }}>Food</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('Beverages')} style={{ backgroundColor: activeTab == 'Beverages' ? 'white' : 'black', width: '50%', borderTopRightRadius: 15, borderBottomRightRadius: 15, padding: 5 }}>
                    {/* #TODO change font size dynamically */}
                    <Text style={{ color: activeTab == 'Beverages' ? 'black' : 'white', textAlign: 'center', fontFamily: 'Montserrat-SemiBold', fontSize: 12 }}>Beverages</Text>
                </TouchableOpacity>
            </View>
            {activeTab == 'Food' ? <FoodMenuItem /> : <BeveragesMenuItem />}
        </View >
    )
}

export default MenuTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 15
    },
})