import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import Dimensions from '../../utils/Dimensions'

const HomePopularLocationCard = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <Image style={styles.ImageStyle} source={props.url} />
        </TouchableOpacity>
    )
}

export default HomePopularLocationCard

const styles = StyleSheet.create({
    ImageStyle: {
        height: Dimensions.SCREEN_HEIGHT * 0.10,
        width: Dimensions.SCREEN_WIDTH * 0.25,
        borderRadius: 10,
        marginHorizontal: 10,
    }
})