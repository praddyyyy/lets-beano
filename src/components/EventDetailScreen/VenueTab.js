import { View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import BookNowButton from './BookNowButton'

const VenueTab = () => {
    return (
        <View style={{ flex: 1 }}>
            {/* TODO Add animation as in https://blog.logrocket.com/react-native-maps-introduction/ */}
            {/* TODO Change marker type */}
            {/* TODO Restrict map maybe */}
            <MapView
                style={{ width: '100%', height: '100%' }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                scrollEnabled={false}
            >
                <Marker coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} />
            </MapView>
            <BookNowButton />
        </View>
    )
}

export default VenueTab