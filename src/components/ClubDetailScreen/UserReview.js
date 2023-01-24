import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon, { Icons } from '../global/Icons'
import moment from 'moment';

const UserReview = (props) => {
    // TODO Change the review date to the actual date type
    const { name, rating, review, reviewdOn, profilePic } = props
    const StarRating = () => {
        let stars = []
        for (let i = 0; i < rating; i++) {
            stars.push(
                <View key={i} style={{ marginRight: 2 }}>
                    <Icon key={i} type={Icons.FontAwesome} name='star' size={16} color={'gold'} />
                </View>
            )
        }
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                {stars}
            </View>
        )
    }
    return (
        <View style={{ borderColor: '#fff', borderWidth: 1, borderRadius: 15, marginTop: 20 }}>
            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }}>
                <Image source={profilePic} style={{ height: 50, width: 50 }} />
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <Text style={{ color: '#fff', fontFamily: 'Blinker-SemiBold', fontSize: 18, marginHorizontal: 10 }}>{name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                        <StarRating />
                        <Text style={{ fontFamily: 'Blinker', color: '#fff', marginLeft: 10 }}>
                            {moment.utc("2021-12-12 12:00:24").local().startOf('seconds').fromNow()}
                        </Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16, marginHorizontal: 15, marginVertical: 10 }}>{review}</Text>
            </View>
        </View>
    )
}

export default UserReview

const styles = StyleSheet.create({})