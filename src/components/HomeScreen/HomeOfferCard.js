import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import Dimensions from '../../utils/Dimensions'
import { View } from 'react-native'

const HomeOfferCard = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <Image style={styles.ImageStyle} source={{ uri: props.url }} />
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                <Text style={{ color: '#000', fontSize: 18, fontFamily: 'Montserrat_700Bold' }}>{props.offerText}</Text>
            </View>
        </TouchableOpacity >
    )
}

export default HomeOfferCard

const styles = StyleSheet.create({
    ImageStyle: {
        height: Dimensions.SCREEN_HEIGHT * 0.08,
        width: Dimensions.SCREEN_WIDTH * 0.28,
        borderRadius: 10,
    }
})