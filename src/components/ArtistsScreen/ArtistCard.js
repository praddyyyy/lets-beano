import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import Dimensions from '../../utils/Dimensions'
import { COLORS } from '../../utils/ThemeColors'
import { moderateScale } from 'react-native-size-matters'

const ArtistCard = (props) => {
    const [artistId, artistName, image, artistLanguages] = [props.artistId, props.artistName, props.artistImage, props.artistLanguages]

    // Function to capitalize the first letter of a string
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // Create an array to hold JSX elements
    const languageElements = artistLanguages.map((language, index) => (
        <React.Fragment key={index}>
            {index > 0 && ' | '}
            <Text style={{ fontSize: 10, fontFamily: 'Montserrat_600SemiBold', color: 'white' }}>{capitalizeFirstLetter(language)}</Text>
        </React.Fragment>
    ));

    // Concatenate the array of elements into a single string
    const concatenatedElements = languageElements.reduce((prev, curr) => [prev, curr]);

    return (
        <View style={styles.card}>
            <View>
                <View style={{ position: 'absolute', zIndex: 99, right: 10, top: 10, backgroundColor: '#fff', borderRadius: 50, width: moderateScale(24, Dimensions.SCALING_FACTOR), height: moderateScale(24, Dimensions.SCALING_FACTOR), justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity>
                        {/* <Icon type={Icons.MaterialCommunityIcons} name='heart-plus' color='#FF4C68' size={25} /> */}
                        <Icon type='material-community' name='heart-plus' color={COLORS.primary} size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                    </TouchableOpacity>
                </View>
                <Image style={{ height: 170, width: '100%', resizeMode: 'stretch', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} source={{ uri: image }} />
            </View>
            {/* TODO Add TouchableOpacity to navigate to club detail screen */}
            <View style={styles.bottomContainer}>
                <Text style={{ display: 'flex', paddingVertical: 5, alignItems: 'center', color: '#fff', fontSize: 16, fontFamily: 'Montserrat_600SemiBold' }}>DJ {artistName}</Text>
                <Text style={{ fontSize: 12, fontFamily: 'Montserrat_600SemiBold', color: 'white' }}>{concatenatedElements}</Text>
            </View>
        </View >
    )
}

export default ArtistCard

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: Dimensions.isLargeScreen() ? Dimensions.SCREEN_WIDTH * 0.8 : Dimensions.SCREEN_WIDTH * 0.42,
        marginVertical: 22,
        marginHorizontal: 15,
        borderRadius: 15,
    },
    bottomContainer: {
        backgroundColor: '#242424',
        alignItems: 'center',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        paddingTop: 5,
        paddingBottom: 10,
    },
})
