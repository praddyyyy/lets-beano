import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Dimensions from '../../utils/Dimensions'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { moderateScale } from 'react-native-size-matters'

const TopBar = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon type='ionicon' name='ios-location' color='white' size={moderateScale(24, Dimensions.SCALING_FACTOR)} />
                <Text style={{ color: 'white', fontFamily: 'Blinker_600SemiBold', fontSize: moderateScale(15, Dimensions.SCALING_FACTOR), marginLeft: 5 }}>Kalavakkam, Chennai</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginRight: moderateScale(14, Dimensions.SCALING_FACTOR) }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('QRScannerScreen') }}>
                        <Icon type='material-icon' name='qr-code-scanner' color='white' size={moderateScale(24, Dimensions.SCALING_FACTOR)} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate('ProfileScreen') }}>
                        <Icon type='font-awesome' name='user-circle-o' color='white' size={moderateScale(24, Dimensions.SCALING_FACTOR)} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: moderateScale(10, Dimensions.SCALING_FACTOR),
        paddingTop: 15
    }
})