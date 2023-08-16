import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import Dimensions from '../../utils/Dimensions'
import { COLORS } from '../../utils/ThemeColors'
import { moderateScale } from 'react-native-size-matters'
import ClubCardCarousel from './ClubCardCarousel'

const ClubCard = (props) => {
    const [clubId, image, clubName, clubRating, clubHighlights, clubPhone, clubEmail, clubFeatures, clubPriceForTwo] = [props.clubId, props.image, props.clubName, props.clubRating, props.clubHighlights, props.clubPhone, props.clubEmail, props.clubFeatures, props.clubPriceForTwo]
    // var myloop = [];
    // for (let i = 0; i < props.clubHighlights.length; i++) {
    //     myloop.push(
    //         <Text key={i} style={{ fontSize: 15, fontFamily: 'Montserrat_500Medium', color: 'white' }}>{props.clubHighlights[i]} | </Text>
    //     );
    // }

    // Function to capitalize the first letter of a string
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // Create an array to hold JSX elements
    const clubHighlightElement = props.clubHighlights.map((highlight, index) => (
        <React.Fragment key={index}>
            {index > 0 && ', '}
            <Text style={{ fontSize: 12, fontFamily: 'Montserrat_500Medium', color: 'white' }}>{capitalizeFirstLetter(highlight)}</Text>
        </React.Fragment>
    ));

    // Concatenate the array of elements into a single string
    const concatenatedElements = clubHighlightElement.reduce((prev, curr) => [prev, curr]);

    return (
        <View style={styles.card}>
            <View>
                <View style={{ position: 'absolute', zIndex: 99, right: 10, top: 10, backgroundColor: '#fff', borderRadius: 50, width: moderateScale(24, Dimensions.SCALING_FACTOR), height: moderateScale(24, Dimensions.SCALING_FACTOR), justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity>
                        {/* <Icon type={Icons.MaterialCommunityIcons} name='heart-plus' color='#FF4C68' size={25} /> */}
                        <Icon type='material-community' name='heart-plus' color={COLORS.primary} size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity
                    // TODO Send club location to club detail screen
                    onPress={() => navigation.navigate('ClubDetailScreen', { 'clubId': clubId, 'title': clubName, 'imageSrc': image, 'clubHighlights': clubHighlights, 'clubRating': clubRating, 'clubPhone': clubPhone, 'clubEmail': clubEmail, 'clubFeatures': clubFeatures, 'clubPriceForTwo': clubPriceForTwo })}
                >
                </TouchableOpacity> */}
                {/* <Image style={{ height: 200, width: '100%', resizeMode: 'stretch', borderTopLeftRadius: 15, borderTopRightRadius: 15, borderWidth: 0.5, borderColor: '#2c2c2c' }} source={{ uri: image }} /> */}
                <ClubCardCarousel
                    clubId={clubId}
                    clubName={clubName}
                    clubImage={image}
                    clubHighlights={clubHighlights}
                    clubRating={clubRating}
                    clubPhone={clubPhone}
                    clubEmail={clubEmail}
                    clubFeatures={clubFeatures}
                    clubPriceForTwo={clubPriceForTwo}
                />
            </View>
            {/* TODO Add TouchableOpacity to navigate to club detail screen */}
            <View style={{ flex: 1 }}>
                <View style={styles.ratingCard}>
                    <Text style={{ display: 'flex', alignItems: 'center', color: 'black', fontSize: 18, fontFamily: 'Montserrat_600SemiBold' }}>{clubName}</Text>
                    <View style={styles.rate}>
                        <Icon type='ant-design' name='star' color='gold' size={moderateScale(15, Dimensions.SCALING_FACTOR)} />
                        <Text style={{ color: 'black', fontSize: 13, fontFamily: 'Montserrat_700Bold' }}>{clubRating}</Text>
                    </View>
                </View>
                <View style={styles.bottomText}>
                    <View style={{ width: '70%' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 5 }}>
                            {/* <Icon type={Icons.Ionicons} name='ios-location' color='white' size={25} /> */}
                            {/* <Icon type='ionicon' name='ios-location' color='white' size={moderateScale(20, Dimensions.SCALING_FACTOR)} /> */}
                            {/* TODO Add club location */}
                            <Text style={{ color: 'white', fontFamily: 'Montserrat_500Medium' }}>Chennai | 350 Kms</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Montserrat_500Medium', color: 'white' }}>{concatenatedElements}</Text>
                        </View>
                        {/* <Text style={{ color: 'white', fontFamily: 'Alata', marginLeft: 15 }}>INR {clubPriceForTwo} for two approx.</Text> */}
                        <Text style={{ color: '#FF4C68', fontFamily: 'Montserrat_500Medium', fontSize: 16, marginTop: 5 }}>20% off using Beano Pay</Text>
                    </View>
                    <View style={{ width: '30%', height: '100%', justifyContent: 'flex-start', marginTop: 5 }}>
                        <Text style={{ color: 'white', flexWrap: 'wrap', textAlign: 'right', fontFamily: 'Montserrat_300Light' }}>INR {clubPriceForTwo} for {'\n'} two approx.</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.reserveTableButton}>
                        <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Montserrat_700Bold' }}>BOOK TABLE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default ClubCard

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: Dimensions.isLargeScreen() ? Dimensions.SCREEN_WIDTH * 0.8 : Dimensions.SCREEN_WIDTH * 0.9,
        borderRadius: 15,
    },
    ratingCard: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: moderateScale(25, Dimensions.SCALING_FACTOR),
        paddingHorizontal: 10,
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        height: moderateScale(18, Dimensions.SCALING_FACTOR),
        width: moderateScale(40, Dimensions.SCALING_FACTOR),
        borderRadius: 50,
        paddingHorizontal: moderateScale(2, Dimensions.SCALING_FACTOR),
    },
    bottomText: {
        flexDirection: 'row',
        backgroundColor: '#2c2c2c',
        justifyContent: 'space-between',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    reserveTableButton: {
        backgroundColor: '#FF4C68',
        height: 30,
        width: Dimensions.SCREEN_WIDTH * 0.4,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 15
    },
})
