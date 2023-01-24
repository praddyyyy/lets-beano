import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Dimensions from '../../constants/Dimensions'
import Icon, { Icons } from '../Icons'
import { useNavigation } from '@react-navigation/native'

const ClubCard = (props) => {
    const navigation = useNavigation()

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
            <View>
                <View style={{ position: 'absolute', zIndex: 99, right: 10, top: 10, backgroundColor: '#fff', borderRadius: 50, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Icon type={Icons.MaterialCommunityIcons} name='heart-plus' color='#FF4C68' size={25} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ClubDetailScreen', { 'title': props.clubName, 'imageSrc': props.source, 'clubLocation': props.clubLocation, 'clubHighlights': props.clubHighlights })}
                >
                    <Image style={{ height: 170, width: '100%', resizeMode: 'stretch', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} source={props.source} />
                </TouchableOpacity>
            </View>
            {/* TODO Add TouchableOpacity to navigate to club detail screen */}
            <View style={styles.bottomContainer}>
                <View style={styles.ratingCard}>
                    <Text style={{ display: 'flex', height: '100%', alignItems: 'center', color: 'black', fontSize: 20, fontFamily: 'Alata', marginLeft: 10 }}>{props.clubName}</Text>
                    <View style={styles.rate}>
                        <Icon type={Icons.AntDesign} name='star' color='gold' size={15} />
                        <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Alata', marginRight: 3, bottom: 2 }}>{props.clubRating}</Text>
                    </View>
                </View>
                <View style={styles.bottomText}>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 5, marginLeft: 10 }}>
                            <Icon type={Icons.Ionicons} name='ios-location' color='white' size={25} />
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
