import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Dimensions from '../../constants/Dimensions'
import Icon, { Icons } from '../global/Icons'
import { useNavigation } from '@react-navigation/native'

const TopBar = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
                {/* Icon size 28 */}
                <Icon type={Icons.Ionicons} name='ios-location' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
                <Text style={{ color: 'white', fontWeight: '600' }}>Kalavakkam, Chennai</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginRight: 10 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('QRScannerScreen') }}>
                        <Icon type={Icons.MaterialIcons} name='qr-code-scanner' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate('ProfileScreen') }}>
                        <Icon type={Icons.FontAwesome} name='user-circle-o' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
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
        height: Dimensions.SCREEN_HEIGHT * 0.07,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})