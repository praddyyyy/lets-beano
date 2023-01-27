import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Skeleton = ({ width, height, style }) => {
    const translateX = useRef(new Animated.Value(-width)).current

    useEffect(() => {
        Animated.loop(
            Animated.timing(translateX, {
                toValue: width,
                duration: 1000,
                useNativeDriver: true
            })
        ).start()
    }, [width])


    return (
        <View
            style={StyleSheet.flatten([
                { width: width, height: height, backgroundColor: 'rgba(255,255,255,0.12)', overflow: 'hidden' },
                style
            ])}
        >
            <Animated.View
                style={{
                    width: '100%',
                    height: '100%',
                    transform: [{ translateX }]
                }}
            >
                <LinearGradient
                    // Button Linear Gradient
                    colors={['transparent', "rgba(255,255,255,0.08)", 'transparent']}
                    start={{ x: 1, y: 1 }}
                    style={{ width: '100%', height: '100%' }}
                />
            </Animated.View>
        </View>
    )
}

export default Skeleton

const styles = StyleSheet.create({})