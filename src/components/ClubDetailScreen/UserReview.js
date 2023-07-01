import { Text, View, Image } from 'react-native'
import { Icon } from '@rneui/themed';
import moment from 'moment';
import { moderateScale } from 'react-native-size-matters';
import Dimensions from '../../utils/Dimensions';

const UserReview = (props) => {
    // TODO Change the review date to the actual date type
    const { name, rating, review, reviewdOn, profilePic } = props
    const StarRating = () => {
        let stars = []
        for (let i = 0; i < rating; i++) {
            stars.push(
                <View key={i} style={{ marginRight: 2 }}>
                    <Icon type='font-awesome' name='star' key={i} color='gold' size={moderateScale(15, Dimensions.SCALING_FACTOR)} />
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
                    <Text style={{ color: '#fff', fontFamily: 'Blinker_600SemiBold', fontSize: 18, marginHorizontal: 10 }}>{name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                        <StarRating />
                        <Text style={{ fontFamily: 'Blinker_400Regular', color: '#fff', marginLeft: 10 }}>
                            {moment.utc("2021-12-12 12:00:24").local().startOf('seconds').fromNow()}
                        </Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{ color: '#fff', fontFamily: 'Blinker_400Regular', fontSize: 16, marginHorizontal: 15, marginVertical: 10 }}>{review}</Text>
            </View>
        </View>
    )
}

export default UserReview