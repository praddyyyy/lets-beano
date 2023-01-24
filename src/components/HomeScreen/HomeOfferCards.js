import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dimensions from '../../constants/Dimensions'
import HomeOfferCard from './HomeOfferCard'

const HomeOfferCards = () => {

    const ImageData = [
        {
            url: require('../../assets/images/Color-Frame-1.jpg')
        },
        {
            url: require('../../assets/images/Color-Frame-2.jpg')
        },
        {
            url: require('../../assets/images/Color-Frame-3.jpg')
        }
    ]

    return (
        // TODO Responsive image sizes
        <View style={styles.container}>
            <View>
                <Text style={{ color: 'white', fontFamily: 'Montserrat-Bold', fontSize: 22, marginHorizontal: 10 }}>Offers <Text style={{ fontFamily: 'Montserrat', fontSize: 12 }}>(via Beano Pay)</Text></Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around' }}>
                {ImageData.map((item, index) =>
                    <HomeOfferCard key={index} url={item.url} />
                )}
            </View>
        </View>
    )
}

export default HomeOfferCards

const styles = StyleSheet.create({
    container: {
        height: Dimensions.SCREEN_HEIGHT * 0.17,
        marginHorizontal: 15,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
    }
})