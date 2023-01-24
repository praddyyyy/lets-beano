import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearProgress } from 'react-native-elements'

const RatingProgress = (props) => {
    const { rating, description } = props

    const handleColor = () => {
        if (description === "Excellent") {
            return "#00a206"
        } else if (description === "Good") {
            return "#6dfe38"
        } else if (description === "Average") {
            return "#ffff00"
        } else if (description === "Poor") {
            return "#ff8000"
        } else if (description === "Terrible") {
            return "#ff0000"
        }
    }
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <View style={{ width: 80 }}>
                <Text style={{ color: '#fff', marginRight: 20, fontFamily: 'Blinker' }}>{description}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <LinearProgress
                    variant='determinate'
                    value={rating}
                    style={{ width: '90%', height: 7, borderRadius: 15 }}
                    trackColor='#fff'
                    color={handleColor()}
                />
            </View>
            <View style={{ width: 40 }}>
                <Text style={{ color: '#fff', fontFamily: 'Blinker' }}>{Math.round((rating * 100).toFixed(1))}%</Text>
            </View>
        </View>
    )
}

export default RatingProgress

const styles = StyleSheet.create({})