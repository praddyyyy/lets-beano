import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Dimensions from '../../utils/Dimensions'
import FoodMenu from './MenuTab/FoodMenu'
import BeveragesMenu from './MenuTab/BeveragesMenu'
import { moderateScale } from 'react-native-size-matters'

const MenuTab = () => {

    const [activeTab, setActiveTab] = useState('Food')

    const clickHandler = () => {
        setActiveTab('Food')
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderColor: 'white', borderWidth: 1, width: Dimensions.SCREEN_WIDTH * 0.45, marginVertical: 30, borderRadius: 50 }}>
                <TouchableOpacity onPress={clickHandler} style={{ backgroundColor: activeTab == 'Food' ? 'white' : 'black', width: '50%', borderTopLeftRadius: 50, borderBottomLeftRadius: 50 }}>
                    <Text style={{ textAlign: 'center', color: activeTab == 'Food' ? 'black' : 'white', fontFamily: 'Montserrat_600SemiBold', fontSize: moderateScale(12, Dimensions.SCALING_FACTOR), paddingVertical: 10 }}>Food</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('Beverages')} style={{ backgroundColor: activeTab == 'Beverages' ? 'white' : 'black', width: '50%', borderBottomRightRadius: 50, borderTopRightRadius: 50 }}>
                    {/* #TODO change font size dynamically */}
                    <Text style={{ color: activeTab == 'Beverages' ? 'black' : 'white', textAlign: 'center', fontFamily: 'Montserrat_600SemiBold', fontSize: moderateScale(12, Dimensions.SCALING_FACTOR), paddingVertical: 10 }}>Beverages</Text>
                </TouchableOpacity>
            </View>
            {activeTab == 'Food' ? <FoodMenu /> : <BeveragesMenu />}
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