import { StyleSheet, View, Animated, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import Dimensions from '../constants/Dimensions'


const FloatingButton = (props) => {
  const navigation = useNavigation();
  let open = 0;
  let animation = new Animated.Value(0)

  toggleMenu = () => {
    const toValue = open ? 1 : 0

    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start()

    open = !open
  }

  useFocusEffect(
    React.useCallback(() => {
      Animated.spring(animation, {
        toValue: 0,
        friction: 5,
        useNativeDriver: true
      }).start()
      console.log(open)
    }, [])
  )

  const homeStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -140]
        })
      }
    ]
  }

  const clubStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120]
        })
      },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70]
        })
      }
    ]
  }

  const djStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -65]
        })
      },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -110]
        })
      }
    ]
  }

  const mediaStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -65]
        })
      },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 110]
        })
      }
    ]
  }

  const profileStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0]
        })
      },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -130]
        })
      }
    ]
  }

  const trophyStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0]
        })
      },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 130]
        })
      }
    ]
  }

  const eventStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120]
        })
      },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 70]
        })
      }
    ]
  }

  const rotation = {
    transform: [{
      rotate: animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "45deg"],
      })
    }]
  }
  return (
    <View style={[open == 0 ? styles.container : styles.containerClosed, props.style]}>

      <TouchableOpacity>
        <Animated.View style={[styles.button, styles.secondary, djStyle]}>
          <MaterialCommunityIcons name="account-group" size={20} color="#F02A4B" />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity>
        <Animated.View style={[styles.button, styles.secondary, profileStyle]}>
          <MaterialCommunityIcons name="account" size={20} color="#F02A4B" />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ClubScreen')}>
        <Animated.View style={[styles.button, styles.secondary, clubStyle]}>
          <FontAwesome5 name="headphones-alt" size={20} color="#F02A4B" />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Animated.View style={[styles.button, styles.secondary, homeStyle]}>
          <FontAwesome5 name="home" size={20} color="#F02A4B" />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('EventsScreen')}>
        <Animated.View style={[styles.button, styles.secondary, eventStyle]}>
          <MaterialIcon name="event" size={20} color="#F02A4B" />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity>
        <Animated.View style={[styles.button, styles.secondary, mediaStyle]}>
          <FontAwesome5 name="play-circle" size={20} color="#F02A4B" />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity>
        <Animated.View style={[styles.button, styles.secondary, trophyStyle]}>
          <FontAwesome5 name="trophy" size={20} color="#F02A4B" />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <FontAwesome5 name="plus-circle" size={24} color="#FFF" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
}

export default FloatingButton

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    zIndex: 99,
    left: '45%',
  },

  containerClosed: {
    alignItems: 'center',
    position: 'absolute',
    zIndex: 99,
    left: '55%',
    backgroundColor: 'red'
  },

  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menu: {
    backgroundColor: '#F02A4B',
  },

  secondary: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#FFF'
  }
})