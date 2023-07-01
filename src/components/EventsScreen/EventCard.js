import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const EventCard = (props) => {
    const { eventName, imageUri, eventAddress, eventPrice } = props
    const navigation = useNavigation()
    const pressHandler = () => {
        navigation.navigate('EventDetailScreen', { eventName: eventName, imageUri: imageUri, eventAddress: eventAddress, eventPrice: eventPrice })
    }
    return (
        <View style={{ marginVertical: 15, marginRight: 20 }}>
            {/* #TODO change opacity of touchable opacity */}
            <TouchableOpacity onPress={pressHandler}>
                <View style={{ borderRadius: 15, height: 250, width: 170 }}>
                    <Image source={{ uri: imageUri }} style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, width: '100%', height: '85%' }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1f1f1f', height: '100%', flex: 1, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                        {/* #TODO Get actual date and distance from data */}
                        <Text style={{ color: '#fff', marginLeft: 10, fontFamily: 'Montserrat_600SemiBold', fontSize: 12 }}>Sun, 20 Nov</Text>
                        <View style={{ borderRadius: 50, backgroundColor: '#000', marginRight: 10 }}>
                            <Text style={{ color: '#fff', paddingHorizontal: 10, paddingVertical: 5, fontFamily: 'Montserrat_600SemiBold', fontSize: 10 }}>12.3 Km</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 5}} onPress={pressHandler}>
                {/* #TODO maybe insert icons for location and currency */}
                <Text style={{ color: '#fff', fontFamily: 'Montserrat_600SemiBold', fontSize: 15 }}>{eventName}</Text>
                <Text style={{ color: '#fff', fontFamily: 'Montserrat_400Regular', paddingVertical: 5, fontSize: 13 }}>{eventAddress}</Text>
                <Text style={{ color: '#fff', fontFamily: 'Montserrat_400Regular', fontSize: 12 }}>{eventPrice} onwards</Text>
            </TouchableOpacity>
        </View >
    )
}

export default EventCard
