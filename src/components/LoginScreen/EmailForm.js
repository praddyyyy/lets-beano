import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React from 'react'
import Dimensions from '../../constants/Dimensions'
import { useNavigation } from '@react-navigation/native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const EmailForm = () => {
    const navigation = useNavigation();
    return (

        <KeyboardAvoidingView behavior='padding' style={{ flex: 1, marginTop: 40 }}>
            <Text style={{ alignSelf: 'center', marginBottom: 15, fontFamily: 'Montserrat-SemiBold', fontSize: 18 }}>Sign Up using your email</Text>
            <TextInput
                placeholder="Email"
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                style={styles.inputField}
            />
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.bookNowButton} onPress={() => navigation.navigate('DummyScreen')} >
                    <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Montserrat-Bold' }}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    )
}

export default EmailForm

const styles = StyleSheet.create({
    inputField: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        backgroundColor: '#fff',
        width: Dimensions.SCREEN_WIDTH * 0.8,
    },

    bookNowButton: {
        backgroundColor: '#FF4C68',
        paddingVertical: 15,
        marginTop: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.SCREEN_WIDTH * 0.8,
    },
})