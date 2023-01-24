import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SearchBar } from 'react-native-elements';
import Animated, { useCode, spring, Value, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Icon, { Icons } from './Icons';


const SearchBarReanimated = () => {
    const offset = useSharedValue(0);

    const defaultSpringStyles = useAnimatedStyle(() => {
        return {
            // transform: [{ translateX: withSpring(offset.value * 255) }],
            width: withSpring(offset.value * 255),
        };
    });

    return (
        <View>
            <TouchableOpacity onPress={() => (offset.value = 10)}>
                <Icon type={Icons.FontAwesome5} name='search' size={30} color='#fff' />

            </TouchableOpacity>
            <Animated.View style={[defaultSpringStyles]}>

                <SearchBar
                    placeholder="Search..."
                    onChangeText={() => { }}
                    onClear={() => { }}
                    lightTheme
                    round
                />

            </Animated.View>

        </View>
    )
}

export default SearchBarReanimated

const styles = StyleSheet.create({})