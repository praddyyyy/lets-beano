import { StyleSheet, TouchableHighlight, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useReducer, useState } from 'react'
import { COLORS } from '../../utils/ThemeColors'
import Dimensions from '../../utils/Dimensions';
import { Icon } from '@rneui/themed';
import Animated, { Extrapolate, interpolate, interpolateColor, log, useAnimatedStyle, useDerivedValue, withSpring, withTiming } from 'react-native-reanimated';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { moderateScale } from 'react-native-size-matters';

const SCREEN_WIDTH = Dimensions.SCREEN_WIDTH;
// TODO Change color of FAB from red to primary color
const FAB_SIZE = 65;
const circleScale = (SCREEN_WIDTH / FAB_SIZE).toFixed(1)
const circleSize = circleScale * FAB_SIZE;
const dist = circleSize / 2 - FAB_SIZE;
const middleDist = dist / 1.41;
const firstSplitX = dist * 0.7;
const firstSplitY = dist * 0.65;
const secondSplitX = dist * 0.5;
const secondSplitY = dist * 0.866;
// TODO make icon size dynamic
// TODO make icon text dynamic
// TODO change icon on each page; its always a plus on every page
const ActionButton = ({ color, icon, style, goto, text }) => {
    const navigation = useNavigation();

    return (
        <Animated.View style={[styles.actionBtn, style]}>
            <TouchableHighlight
                underlayColor={'transparent'}
                style={styles.actionBtn}
                onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                    navigation.navigate(`${goto}`)
                }}>
                {/* <Icon type={Icons.FontAwesome5} name={icon} size={22} color={color} /> */}
                <Icon type='font-awesome-5' name={icon} color={color} size={moderateScale(22, Dimensions.SCALING_FACTOR)} />
            </TouchableHighlight>
            <Text style={styles.iconText}>{text}</Text>
        </Animated.View>
    )
}

export default function Fab(props) {
    // const [open, toggle] = useReducer(s => !s, false)
    const [open, setOpen] = useState(false)

    useFocusEffect(
        React.useCallback(() => {
            setOpen(false)
        }, [])
    )

    const rotation = useDerivedValue(() => {
        return withTiming(open ? '0deg' : '135deg');
    }, [open])

    const progress = useDerivedValue(() => {
        return open ? withSpring(1) : withSpring(0)
    })

    const bgProgress = useDerivedValue(() => {
        return open ? withSpring(1) : withSpring(0, {
            overshootClamping: true
        })
    })

    const translation = useDerivedValue(() => {
        return open ? withSpring(1, { stiffness: 80, damping: 8 }) : withSpring(0)
    })

    const fabStyles = useAnimatedStyle(() => {
        const rotate = rotation.value;
        const backgroundColor = interpolateColor(
            progress.value,
            [0, 1],
            [COLORS.red, COLORS.darkRed]
        )
        return {
            transform: [{ rotate }],
            backgroundColor,
        }
    })

    const scalingStyles = useAnimatedStyle(() => {
        const scale = interpolate(
            bgProgress.value,
            [0, 1],
            [0, 25],
        )
        return {
            transform: [{ scale }]
        }
    })

    const translationStyles = (x, y, valueX, valueY) => (
        useAnimatedStyle(() => {
            const translateX = interpolate(
                translation.value,
                [0, 1],
                [0, -valueX],
                { extrapolateLeft: Extrapolate.CLAMP }
            )
            const translateY = interpolate(
                translation.value,
                [0, 1],
                [0, -valueY],
                { extrapolateLeft: Extrapolate.CLAMP }
            )
            const scale = interpolate(
                progress.value,
                [0, 1],
                [0, 1],
                { extrapolateLeft: Extrapolate.CLAMP }
            )
            if (x && y) {
                return {
                    transform: [{ translateX: translateX }, { translateY: translateY }, { scale }]
                }
            } else if (x) {
                return {
                    transform: [{ translateX: translateX }, { scale }]
                }
            } else {
                return {
                    transform: [{ translateY: translateY }, { scale }]
                }
            }
        })
    )
    return (
        <View style={styles.container}>
            <View style={[styles.fabContainer, { bottom: props.bottom }]}>
                <Animated.View style={[styles.expandingCircle, scalingStyles]} />
                <TouchableWithoutFeedback onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                    setOpen(!open)
                }}>
                    <Animated.View style={[styles.fab, fabStyles]}>
                        {/* <Icon type={Icons.EvilIcons} name="close" color={COLORS.white} size={34} /> */}
                        <Icon type='evil-icon' name='close' color='white' size={moderateScale(25, Dimensions.SCALING_FACTOR)} />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <ActionButton style={translationStyles(false, true, dist, dist)} color={props.current == 'Home' ? COLORS.red : 'white'} icon="home" goto='HomeScreen' text='Home' />
                <ActionButton style={translationStyles(true, true, firstSplitX, firstSplitY)} color={props.current == 'DJ' ? COLORS.red : 'white'} icon="user-friends" goto='DJScreen' text='DJs' />
                <ActionButton style={translationStyles(true, false, dist, dist)} color={props.current == 'Profile' ? COLORS.red : 'white'} icon="user-alt" goto='ProfileScreen' text='Profile' />
                <ActionButton style={translationStyles(true, true, -firstSplitX, firstSplitY)} color={props.current == 'Club' ? COLORS.red : 'white'} icon="headphones-alt" goto='ClubsScreen' text='Clubs' />
                {/* <ActionButton style={translationStyles(true, true, -firstSplitX, firstSplitY)} color={props.current == 'Media' ? COLORS.red : 'white'} icon="play" goto='HomeScreen' text='Media' />
                <ActionButton style={translationStyles(true, false, -dist, dist)} color={props.current == 'Rewards' ? COLORS.red : 'white'} icon="trophy" text='Rewards' /> */}
                <ActionButton style={translationStyles(true, false, -dist, dist)} color={props.current == 'Events' ? COLORS.red : 'white'} icon="newspaper" goto='EventsScreen' text='Events' />
            </View>
        </View>
    )
}

const CircleStyle = {
    width: FAB_SIZE,
    height: FAB_SIZE,
    borderRadius: FAB_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.accent,
        zIndex: 99,
        position: 'absolute',
        bottom: 40,
        left: SCREEN_WIDTH / 2 - FAB_SIZE / 2
    },
    fabContainer: {
        position: 'absolute',
        zIndex: 99,
    },
    fab: {
        ...CircleStyle,
        backgroundColor: COLORS.red,
        transform: [{ rotate: '135deg' }]
    },
    expandingCircle: {
        // ...CircleStyle,
        // transform: [{ scale: 8 }],
        backgroundColor: 'rgba(0,0,0,0.9)',
        height: Dimensions.SCREEN_HEIGHT,
        width: Dimensions.SCREEN_WIDTH,
        // width: FAB_SIZE,
        // height: FAB_SIZE,
        borderRadius: FAB_SIZE / 2,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink',
        position: 'absolute',
        zIndex: -1,
    },
    actionBtn: {
        ...CircleStyle,
        // backgroundColor: COLORS.darkRed,
        position: 'absolute',
        zIndex: -1,
        width: FAB_SIZE,
        height: FAB_SIZE,
    },

    iconText: {
        fontFamily: 'Blinker_400Regular',
        color: 'white',
        fontSize: 16,
        top: Dimensions.isLargeScreen() ? 30 : 20
    }
})