import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Dimensions from '../../constants/Dimensions'
import Icon, { Icons } from './Icons'
import { useNavigation } from '@react-navigation/native'

const TopBar = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {/* TODO change size of icons according to screen size */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
            }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }}>
                        {/*  Icon Size: 28 */}
                        <Icon type={Icons.Ionicons} name='chevron-back-circle' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ color: '#FF4C68', fontSize: 22 }}>Let's Beano</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                        <Icon type={Icons.Ionicons} name='search-outline' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginTop: 15
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                }}>
                    <Icon type={Icons.Ionicons} name='ios-location' color='white' size={Dimensions.SCREEN_HEIGHT * 0.030} />
                    <Text style={{ color: 'white', fontFamily: 'Montserrat-Bold', fontSize: 14 }}>Kalavakkam, Chennai</Text>
                </View>
                {/* TODO change no of places dynamically */}
                <View>
                    <Text style={{ color: 'white', fontFamily: 'Montserrat-Bold', fontSize: 15 }}>6 Places Listed</Text>
                </View>
            </View>

        </View >
    )
}

export default TopBar

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 10
    }
})