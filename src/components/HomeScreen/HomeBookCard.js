import { TouchableOpacity, Image } from 'react-native'
import React from 'react'

const HomeBookCard = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <Image style={[{ borderRadius: 10 }, props.style]} source={props.url} />
        </TouchableOpacity>
    )
}

export default HomeBookCard
