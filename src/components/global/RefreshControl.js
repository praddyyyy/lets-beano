import { View, Text, Platform } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'



const RefreshControl = () => {

  const selectHook = (useAndroid, useIOS) => {
    Platform.select({
      default: useIOS,
      android: useAndroid,
    })
  }

  const useProgressViewOffset = selectHook({
    useAndroid: function () {
      const navigation = useNavigation()
      const [progressViewOffset, setProgressViewOffset] = useState(undefined)
      const goBackEventWasHandled = useRef(false)

      useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', (event) => {
          if (event.data.action.type == 'GO_BACK' && !goBackEventWasHandled.current) {
            event.preventDefault()
            goBackEventWasHandled.current = true
            setProgressViewOffset(-1000)
          }
        })
        return unsubscribe
      }, [navigation])

      useEffect(() => {
        if (progressViewOffset !== undefined) {
          navigation.goBack()
        }
      }, [navigation, progressViewOffset])

      return progressViewOffset
    },
    useIOS: function () {
      return undefined
    }
  })
  return (
    <View>
      <Text>RefreshControl</Text>
    </View>
  )
}

export default RefreshControl