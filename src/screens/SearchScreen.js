import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Input } from 'react-native-elements'
import IonIcon from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Dimensions from '../constants/Dimensions'

const SearchScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IonIcon name='ios-arrow-back-circle' size={24} color='white' style={{ marginLeft: 15, top: 5 }} />
                </TouchableOpacity>
                <Input
                    placeholder='Search clubs'
                    autoFocus={true}
                    leftIcon={
                        <IonIcon name='search-outline' color='white' size={22} style={{ marginLeft: 10 }} />
                    }
                    inputContainerStyle={styles.inputContainerStyle}
                    containerStyle={styles.containerStyle}
                    inputStyle={{ color: 'white', fontFamily: 'Alata' }}
                />
            </View>
        </SafeAreaView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f1f',
    },
    inputContainerStyle: {
        borderWidth: 1,
        borderRadius: 50,
    },
    containerStyle: {
        top: 20,
        width: Dimensions.SCREEN_WIDTH * 0.9
    }
})