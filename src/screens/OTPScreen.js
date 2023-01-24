import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import OTPInputView from '../components/OTPComponent'
import { useNavigation } from '@react-navigation/native'


const OTPScreen = () => {
    const navigation = useNavigation()
    const otpRef = useRef(null);

    useEffect(() => {
        setTimeout(() => otpRef.current.focusField(0), 250);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.otpTextView}>
                <Text style={styles.otpText}>Verify your number</Text>
                <Text style={styles.otpSubText}>{`Enter the code we've sent to \n +91 99999 xxxxx. `}<Text style={{ textDecorationLine: 'underline' }} onPress={() => navigation.goBack()}>Change?</Text></Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start', marginLeft: 20 }}>
                <OTPInputView
                    style={{ width: '80%', height: 150 }}
                    pinCount={6}
                    ref={otpRef}
                    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                    // onCodeChanged = {code => { this.setState({code})}}
                    autoFocusOnLoad={false}
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled={(code => {
                        // console.log(`Code is ${code}, you are good to go!`)
                        navigation.navigate('HomeScreen')
                    })}
                />
            </View>
        </View>
    )
}

export default OTPScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },

    otpTextView: {
        marginTop: 120,
        marginLeft: 20
    },

    otpText: {
        color: '#FF4C68',
        fontSize: 26,
        fontFamily: 'Montserrat-SemiBold'
    },

    otpSubText: {
        color: '#FF4C68',
        fontSize: 18,
        marginTop: 15,
        fontFamily: 'Montserrat',
        textAlign: 'left'
    },

    borderStyleBase: {
        width: 40,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#FF4C68",
    },

    underlineStyleBase: {
        width: 40,
        height: 45,
        borderWidth: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'black',
        fontSize: 20,
        fontFamily: 'Alata',
        borderRadius: 5
    },

    underlineStyleHighLighted: {
        borderColor: "#FF4C68",
    },
});