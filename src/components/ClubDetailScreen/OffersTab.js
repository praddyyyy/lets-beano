import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const OffersTab = () => {
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', borderRadius: 15, borderWidth: 1, borderColor: '#fff', marginTop: 20, justifyContent: 'space-between'}}>
                <View style={{ margin: 10 }}>
                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-Bold', fontSize: 20 }}>Flat 10% Off on the Total Bill</Text>
                    <Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold', fontSize: 18 }}>Get Instant Discount</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Text style={{ color: '#FF4C68', fontFamily: 'Montserrat-Bold', fontSize: 18, marginBottom: 10 }}>Using Beano Pay</Text>
                    <TouchableOpacity style={{width: '100%', backgroundColor: '#FF4C68', borderRadius: 50}}>
                        <Text style={{ color: '#fff', fontFamily: 'Montserrat-Bold', fontSize: 18, textAlign: 'center', padding: 10 }}>PAY BILL</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default OffersTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        marginHorizontal: 15
    }
})