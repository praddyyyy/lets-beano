import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dimensions from '../../constants/Dimensions'
import Icon, { Icons } from '../Icons'

const TopBar = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
                {/* Icon size 28 */}
                <Icon type={Icons.Ionicons} name='ios-location' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
                <Text style={{ color: 'white', fontWeight: '600' }}>Kalavakkam, Chennai</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginRight: 10 }}>
                    <Icon type={Icons.MaterialIcons} name='qr-code-scanner' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
                </View>
                <View>
                    <Icon type={Icons.FontAwesome} name='user-circle-o' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
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