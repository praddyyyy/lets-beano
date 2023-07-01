import { StyleSheet, Text, View, ScrollView } from 'react-native'
// import { Rating } from 'react-native-ratings'
// import { Rating } from '@rneui/themed';
import { Rating } from 'react-native-elements'
import RatingProgress from './RatingProgress'
import UserReview from './UserReview'

const ReviewTab = () => {

    const ratingData = [
        { description: "Excellent", rating: 50 },
        { description: "Good", rating: 20 },
        { description: "Average", rating: 30 },
        { description: "Poor", rating: 10 },
        { description: "Terrible", rating: 5 }
    ]

    const reviewData = [
        {
            name: 'John Doe',
            profilePic: require('../../assets/images/user-1.png'),
            rating: 4,
            reviewdOn: '12/12/2020',
            review: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.'
        },

        {
            name: 'Garima',
            profilePic: require('../../assets/images/user-1.png'),
            rating: 2,
            reviewdOn: '05/08/2020',
            review: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.'
        }
    ]

    let totalRating = 0

    for (let i = 0; i < ratingData.length; i++) {
        totalRating = totalRating + ratingData[i].rating
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <View style={{ width: '100%', borderColor: '#fff', borderRadius: 15, borderWidth: 1, paddingVertical: 10, marginTop: 20 }}>
                    <Text style={{ color: '#fff', fontFamily: 'Montserrat_700Bold', fontSize: 20, marginHorizontal: 20 }}>User Ratings</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 15 }}>
                        {/* Rating and Review Card */}
                        <View style={{ alignItems: 'center', marginRight: 10 }}>
                            <View style={{ backgroundColor: '#1f1f1f', justifyContent: 'center', alignItems: 'center', borderRadius: 15, width: '100%' }}>
                                <View style={{ backgroundColor: '#FF4C68', width: '100%', alignItems: 'center', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Blinker_600SemiBold' }}>4.3</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 16, marginTop: 10, marginHorizontal: 15, fontFamily: 'Blinker_600SemiBold' }}>435</Text>
                                    <Text style={{ color: 'white', fontSize: 16, marginHorizontal: 15, marginBottom: 5 }}>Reviews</Text>
                                </View>
                            </View>
                        </View>
                        <Rating
                            type='star'
                            tintColor='black'
                            startingValue={1.6}
                            ratingCount={5}
                            readonly
                            style={{ paddingVertical: 10 }}
                        />
                    </View>
                    <View style={{ marginBottom: 10, alignItems: 'flex-start', marginHorizontal: 20, marginTop: 10 }}>
                        {ratingData.map((item, index) => {
                            return (
                                <RatingProgress key={index} description={item.description} rating={item.rating / totalRating} />
                            )
                        })}
                    </View>
                </View>

                <Text style={{ color: '#fff', fontFamily: 'Montserrat_700Bold', fontSize: 20, marginTop: 10 }}>Reviews</Text>
                {reviewData.map((item, index) => {
                    return <UserReview key={index} name={item.name} rating={item.rating} reviewdOn={item.reviewdOn} review={item.review} profilePic={item.profilePic} />
                })}

            </View>
        </ScrollView>
    )
}

export default ReviewTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        marginHorizontal: 15,
        marginBottom: 15
    }
})