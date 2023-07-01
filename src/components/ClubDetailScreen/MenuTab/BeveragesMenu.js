import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import Dimensions from '../../../utils/Dimensions'
import { useState } from 'react'

const BeveragesMenu = () => {
    const [imgActive, setImgActive] = useState(0)

    const images = [
        'https://img.freepik.com/free-vector/burgers-restaurant-menu-template_23-2149005028.jpg?w=2000',
        'https://99designs-blog.imgix.net/blog/wp-content/uploads/2014/05/the_urban_tap_PDF_01.jpg?auto=format&q=60&fit=max&w=930',
        'https://food.fnr.sndimg.com/content/dam/images/food/unsized/2014/9/17/0/fnd_Menu-Thinkstock_s4x3.jpg',
    ]

    const onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if (slide !== imgActive) {
                setImgActive(slide);
            }
        }
    }
    return (
        <View style={styles.wrap}>
            <ScrollView
                onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={styles.wrap}
            >
                {
                    images.map((image, index) => (
                        <Image
                            key={image}
                            resizeMode="stretch"
                            style={styles.wrap}
                            source={{ uri: image }}
                        />
                    ))
                }
            </ScrollView>
            <View style={[styles.wrapDot, { bottom: -30 }]}>
                {
                    images.map((image, index) => (
                        <Text key={image} style={imgActive == index ? styles.activeDot : styles.dot}>●</Text>
                    ))
                }
            </View>
        </View>
    )
}

export default BeveragesMenu

const styles = StyleSheet.create({
    wrap: {
        width: Dimensions.SCREEN_WIDTH * 0.9,
        height: Dimensions.SCREEN_HEIGHT * 0.7,
        borderRadius: 15
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    activeDot: {
        margin: 3,
        color: 'white',
    },
    dot: {
        margin: 3,
        color: 'gray',
    }
})