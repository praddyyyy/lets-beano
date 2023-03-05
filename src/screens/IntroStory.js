import { Animated, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Dimensions from '../constants/Dimensions'
import { SafeAreaView } from 'react-native-safe-area-context'

const IntroStory = ({ navigation }) => {
    const [current, setCurrent] = useState(0)
    const [content, setContent] = useState([
        {
            content: require('../assets/images/Dance.jpg'),
            description: 'Explore the most happening events around you...',
            type: 'image',
            finish: 0
        },
        {
            content: require('../assets/images/Book-Image-2.jpg'),
            description: 'Reserve tables in your favorite restobars, clubs, pubs...',
            type: 'image',
            finish: 0
        },
        {
            content: require('../assets/images/Club-3.jpg'),
            description: 'Pay using Beano Pay and get exciting offers...',
            type: 'image',
            finish: 0
        },
        {
            content: require('../assets/images/DJ5.jpg'),
            description: 'Choose and book the best DJ available in your city...',
            type: 'image',
            finish: 0
        },
    ])

    const progress = useRef(new Animated.Value(0)).current
    const start = () => {
        Animated.timing(progress, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false
        }).start(({ finished }) => {
            if (finished) {
                next()
            }
        })
    }

    const next = () => {
        if (current != content.length - 1) {
            let tempData = content;
            tempData[current].finish = 1;
            setContent(tempData);
            setCurrent(current + 1)
            progress.setValue(0);
        }
        else {
            close();
        }
    };

    const previous = () => {
        if (current - 1 >= 0) {
            let tempData = content;
            tempData[current].finish = 0;
            setContent(tempData);
            setCurrent(current - 1)
            progress.setValue(0);
        }
    };

    const close = () => {
        progress.setValue(0);
        navigation.navigate('SignUpScreen');
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            {/* TODO Check Status Bar for IOS */}
            {/* <StatusBar style={{ height: 0 }} /> */}
            <Image source={content[current].content} onLoadEnd={() => {
                progress.setValue(0);
                start();
            }} style={{ width: Dimensions.SCREEN_WIDTH, height: Dimensions.SCREEN_HEIGHT, resizeMode: 'cover' }} />
            <View style={{ width: Dimensions.SCREEN_WIDTH, position: 'absolute', top: Platform.OS === 'ios' ? Dimensions.SCREEN_HEIGHT * 0.1 : Dimensions.SCREEN_HEIGHT * 0.05, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                {content.map((item, index) => {
                    return (
                        <View key={index} style={{ flex: 1, height: 3, backgroundColor: 'rgba(255, 255, 255, 0.5)', marginHorizontal: 5, flexDirection: 'row' }}>
                            <Animated.View style={{ flex: current == index ? progress : content[index].finish, height: 3, backgroundColor: 'rgba(255, 255, 255, 1)' }}>
                            </Animated.View>
                        </View>
                    )
                })}
            </View>
            <View style={{ width: Dimensions.SCREEN_WIDTH, height: Dimensions.SCREEN_HEIGHT, position: 'absolute', bottom: 60, padding: 10, flex: 1, justifyContent: 'flex-end' }}>
                <Text style={{ fontSize: 25, color: 'white', fontFamily: 'MontserratAlternates-Black' }}>{content[current].description}</Text>
                {/* <TouchableOpacity style={styles.nextButton} activeOpacity={0.7} onPress={() => {
                    next()
                }}>
                    <Text style={styles.nextText}>NEXT</Text>
                </TouchableOpacity> */}
            </View>
            <View style={{ width: Dimensions.SCREEN_WIDTH, height: Dimensions.SCREEN_HEIGHT, position: 'absolute', top: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ width: '30%', height: '100%' }} onPress={() => {
                    previous()
                }}>
                    <View></View>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '30%', height: '100%' }} onPress={() => {
                    next()
                }}>
                    <View></View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default IntroStory

const styles = StyleSheet.create({
    nextButton: {
        backgroundColor: '#FF4C68',
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45,
        marginBottom: 20,
        width: '80%',
        alignSelf: 'center'
    },
    nextText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Alata'
    },
})