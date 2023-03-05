import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Dimensions from '../../constants/Dimensions'
import HomeOfferCard from './HomeOfferCard'

const HomeOfferCards = (props) => {
    const [data, setData] = useState(props.data)

    return (
        // TODO Responsive image sizes
        <View style={styles.container}>
            <View>
                <Text style={{ color: 'white', fontFamily: 'Montserrat-Bold', fontSize: 22, marginHorizontal: 10 }}>Offers <Text style={{ fontFamily: 'Montserrat', fontSize: 12 }}>(via Beano Pay)</Text></Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'flex-start' }}>
                {data.map((item, index) =>
                    <HomeOfferCard key={index} url={item.image} />
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