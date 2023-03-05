import { TouchableOpacity, Image, View, Text } from 'react-native'
import React from 'react'

const HomeBookCard = (props) => {
    const text = props.text
    return (
        // TODO Check DJ's text
        <TouchableOpacity style={{ borderRadius: 10 }} activeOpacity={0.5}>
            <Image style={[{ borderRadius: 10, opacity: 0.6, borderWidth: 0.5, borderColor: 'rgba(255,255,255,0.3)' }, props.style]} source={props.url} />
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Montserrat-Bold' }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeBookCard
