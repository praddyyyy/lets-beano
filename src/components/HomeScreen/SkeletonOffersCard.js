import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Skeleton from '../global/Skeleton'
import Dimensions from '../../constants/Dimensions'

const SkeletonOffersCard = () => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ color: 'white', fontFamily: 'Montserrat-Bold', fontSize: 22, marginHorizontal: 10 }}>Offers <Text style={{ fontFamily: 'Montserrat', fontSize: 12 }}>(via Beano Pay)</Text></Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'flex-start', marginHorizontal: 10 }}>
                {
                    [1, 2, 3].map((item, index) =>
                        <Skeleton key={index} width={Dimensions.SCREEN_WIDTH * 0.25} height={Dimensions.SCREEN_HEIGHT * 0.10} style={{ borderRadius: 10, marginHorizontal: 10 }} />
                    )
                }
            </View>
        </View>
    )
}

export default SkeletonOffersCard

const styles = StyleSheet.create({
    container: {
        height: Dimensions.SCREEN_HEIGHT * 0.17,
        marginHorizontal: 15,
        marginTop: 20,
        borderWidth: 0.5,
        borderColor: 'rgba(255,255,255,0.3)',
        borderRadius: 15,
    }
})