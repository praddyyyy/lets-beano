import { StyleSheet, View } from 'react-native'
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated'
import Dimensions from '../../../utils/Dimensions'


const Paginator = ({ data, scrollX }) => {
    return (
        <Animated.View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            {data.map((_, i) => {
                const inputRange = [
                    (i - 1) * Dimensions.CAROUSEL_CARD_LENGTH,
                    i * Dimensions.CAROUSEL_CARD_LENGTH,
                    (i + 1) * Dimensions.CAROUSEL_CARD_LENGTH,
                ]

                const dotWidth = interpolate(
                    scrollX,
                    inputRange,
                    [8, 18, 8],
                    Extrapolate.CLAMP
                )

                const opacity = interpolate(
                    scrollX,
                    inputRange,
                    [0.3, 1, 0.3],
                    Extrapolate.CLAMP
                )
                return (
                    <View style={[styles.dot, { width: dotWidth, opacity }]} key={i.toString()} />
                )
            })}
        </Animated.View>
    )
}

export default Paginator

const styles = StyleSheet.create({
    dot: {
        height: 8,
        borderRadius: 5,
        backgroundColor: 'white',
        marginHorizontal: 3
    }
})