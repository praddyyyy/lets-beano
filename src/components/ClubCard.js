import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dimensions from '../constants/Dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign'
import IonIcon from 'react-native-vector-icons/Ionicons'

const ClubCard = (props) => {
    var myloop = [];

    for (let i = 0; i < props.clubHighlights.length; i++) {
        myloop.push(
            <View key={i}>
                <Text style={{ fontSize: 15, fontFamily: 'Alata', color: 'white' }}>{`\u2022 ${props.clubHighlights[i]}`}</Text>
            </View>
        );
    }
    return (
        <View style={styles.card}>
            <Image style={{ height: 170, width: Dimensions.SCREEN_WIDTH * 0.9, resizeMode: 'stretch', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} source={props.source} />
            <View style={styles.bottomContainer}>
                <View style={styles.ratingCard}>
                    <Text style={{ display: 'flex', height: '100%', alignItems: 'center', color: 'black', fontSize: 20, fontFamily: 'Alata', marginLeft: 10 }}>{props.clubName}</Text>
                    <View style={styles.rate}>
                        <AntDesign name='star' color='gold' size={15} />
                        <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Alata', marginRight: 3, bottom: 2 }}>{props.clubRating}</Text>
                    </View>
                </View>
                <View style={styles.bottomText}>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start', marginTop: 5, marginLeft: 10 }}>
                            <IonIcon color='white' size={25} name='location-outline' />
                            <Text style={{ color: 'white', fontFamily: 'Alata', left: 0 }} > {props.clubLocation} | 360 Kms</Text>
                        </View>
                        <Text style={{ color: 'white', fontFamily: 'Alata', marginLeft: 15 }}>INR 1800 for two approx.</Text>
                        <Text style={{ color: '#FF4C68', fontFamily: 'Alata', fontSize: 17, left: 15 }}>20% off using Beano Pay</Text>
                    </View>
                    <View style={{ marginRight: 10, marginTop: 5 }}>
                        {myloop}
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.reserveTableButton}>
                        <Text style={{ bottom: 3, color: 'white', fontSize: 18, fontFamily: 'Alata' }}>RESERVE TABLE</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default ClubCard

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: Dimensions.SCREEN_WIDTH * 0.9,
        height: 320,
        borderRadius: 15,
        marginVertical: 22
    },
    ratingCard: {
        backgroundColor: '#d9d9d9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 35,
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        height: 22,
        width: 55,
        borderRadius: 50,
        marginRight: 10
    },
    bottomText: {
        flexDirection: 'row',
        backgroundColor: '#2c2c2c',
        justifyContent: 'space-between',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        height: 115
    },
    reserveTableButton: {
        backgroundColor: '#FF4C68',
        height: 40,
        width: Dimensions.SCREEN_WIDTH * 0.5,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        top: -20
    },
})
