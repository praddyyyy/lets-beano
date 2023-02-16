import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BarCodeScanner } from 'expo-barcode-scanner'
import Icon, { Icons } from '../components/global/Icons'
import { useNavigation } from '@react-navigation/native'
import Dimensions from '../constants/Dimensions'
// TODO Check what happens when the user denies camera permission
const QRScannerScreen = () => {
    const navigation = useNavigation()
    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)
    const [scannedData, setScannedData] = useState('')

    const getCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
    }

    // Request camera permission
    useEffect(() => {
        getCameraPermission()
    }, [])

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true)
        setScannedData(data)
        alert(`Bar code with type ${type} and data ${data} has been scanned!`)
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text>No access to camera</Text>
            </View>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon type={Icons.Ionicons} name='ios-arrow-back' color='white' size={30} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Alata', color: '#fff', alignSelf: 'center', fontSize: 20 }}>Scan QR to Pay</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('ProfileScreen') }}>
                    <Icon type={Icons.FontAwesome} name='user-circle-o' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
                </TouchableOpacity>
            </View>
            <View style={styles.scanBox}>
                <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={{ height: 400, width: 400 }} />
            </View>
            {scanned && <TouchableOpacity onPress={() => setScanned(false)} style={styles.scanAgain} ><Text style={{color: '#fff', fontFamily: 'Alata'}}>Tap to Scan Again</Text></TouchableOpacity>}
        </SafeAreaView>
    )
}

export default QRScannerScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // TODO change background color (#101010 or #141414)
        backgroundColor: '#101010',
        paddingHorizontal: 15,
        paddingTop: 10
    },

    scanBox: {
        height: 300,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        overflow: 'hidden'
    },
    scanAgain: {
        backgroundColor: '#FF4C68',
        width: '40%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 40,
        marginTop: 15   
    }
})