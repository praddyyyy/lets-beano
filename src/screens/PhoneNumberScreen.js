import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Display } from '../utils'
import { IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome'
// import FloatingButton from '../components/FloatingButton';

const PhoneNumberScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.phoneNumberView}>
                <Text style={styles.phoneNumberText}>What's Your phone number?</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.countryListContainer}>
                    <Text style={{ color: 'black', fontSize: 20 }}>+91</Text>
                </View>
                <View style={styles.phoneInputContainer}>
                    <TextInput placeholder='Phone Number' placeholderTextColor={'grey'} selectionColor={'grey'} keyboardType="number-pad" style={styles.inputText} />
                </View>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.submitContainer}>
                <View style={styles.policyContainer}>
                    <Icon name='lock' size={20} style={{ marginRight: 15, color: 'white' }} />
                    <Text style={{ width: 220, color: 'white', fontFamily: 'Alata' }}>We never share this with anyone and
                        it won't be on your profile</Text>
                </View>
                <IconButton
                    icon={props => <Icon name="arrow-circle-right" {...props} />}
                    color="white"
                    onPress={() => navigation.navigate('OTPScreen')}
                />
            </KeyboardAvoidingView>
        </View>
    )
}

export default PhoneNumberScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },

    phoneNumberView: {
        marginTop: 120,
        marginLeft: 20
    },

    phoneNumberText: {
        color: '#FF4C68',
        fontSize: 26,
        fontFamily: 'Montserrat-SemiBold'
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 50,
    },

    countryListContainer: {
        backgroundColor: '#FFFFFF',
        width: Display.setWidth(20),
        height: Display.setHeight(6),
        borderRadius: 10,
        flexDirection: 'row',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    phoneInputContainer: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center'
    },

    inputText: {
        fontSize: 20,
        padding: 0,
        height: Display.setHeight(6),
        color: 'black'
    },

    submitContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
    },

    policyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})