import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { Icon } from '@rneui/themed'
import { moderateScale } from 'react-native-size-matters';
import Dimensions from '../../utils/Dimensions';
import { Linking } from 'react-native';

const QuickLookTab = (props) => {
    const clubName = props.clubName
    const clubLocation = props.clubLocation
    const clubHighlights = props.clubHighlights
    const clubPriceForTwo = props.clubPriceForTwo
    const clubFeatures = props.clubFeatures
    // TODO add list of timings for clubs opening and closing
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, backgroundColor: '#000', marginHorizontal: 15, marginVertical: 20 }}>
                    {/* Details Container */}
                    <View style={{ borderColor: '#fff', borderRadius: 15, borderWidth: 1 }}>
                        {/* Left Container Club Details */}
                        <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                            <View style={{ marginBottom: 5, width: '50%' }}>
                                <Text style={{ color: 'white', fontSize: 26, marginTop: 10, fontFamily: 'Montserrat_700Bold' }}>{clubName}</Text>
                                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Blinker_400Regular', margin: 3 }}>{clubLocation}</Text>
                                {/* Change alignment of club highlights */}
                                {/* <View style={{ flexDirection: 'row' }}>
                                    {clubHighlights.map((item, index) => (
                                        <Text key={index} style={{ color: 'white', marginRight: 5, fontFamily: 'Blinker-SemiBold', fontSize: 15, margin: 3 }}>{item}</Text>
                                    ))}
                                </View> */}
                                <Text style={{ color: 'white', fontFamily: 'Blinker_400Regular', margin: 3, fontSize: 15 }}><Text style={{ fontFamily: 'Blinker_700Bold' }}>INR {clubPriceForTwo}</Text> for two approx</Text>
                                <Text style={{ color: '#FF4C68', fontFamily: 'Blinker_400Regular', margin: 3, fontSize: 15 }}>Now Open <Text style={{ fontFamily: 'Blinker_400Regular', color: '#fff' }}>- Closes 11:00 PM</Text></Text>
                                <Text style={{ color: '#FF4C68', fontFamily: 'Blinker_600SemiBold', margin: 3, fontSize: 18 }}>10% off using Beano Pay</Text>
                            </View>
                            {/* Rating and Review Card */}
                            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <View style={{ backgroundColor: '#1f1f1f', justifyContent: 'center', alignItems: 'center', borderRadius: 15, width: Dimensions.isLargeScreen() ? '30%' : '60%' }}>
                                    <View style={{ backgroundColor: '#FF4C68', width: '100%', alignItems: 'center', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                                        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Blinker_600SemiBold' }}>4.3</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ color: 'white', fontSize: 16, marginTop: 10, marginHorizontal: 15, fontFamily: 'Blinker_600SemiBold' }}>435</Text>
                                        <Text style={{ color: 'white', fontSize: 16, marginHorizontal: 15, marginBottom: 5 }}>Reviews</Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#1f1f1f', borderRadius: 15 }}>
                                    <Text style={{ color: 'white', fontSize: 16, marginHorizontal: 15, marginVertical: 10, fontFamily: 'Blinker_600SemiBold' }}>47 Kms</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* Features Container */}
                    {/* TODO Add icons */}
                    <View style={{ borderColor: '#fff', borderRadius: 15, borderWidth: 1, marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Montserrat_700Bold', color: '#fff', fontSize: 16, marginHorizontal: 10, marginVertical: 10 }}>Features and Facilities</Text>
                        <View style={{ marginHorizontal: 15, flexWrap: 'wrap', marginBottom: 10 }}>
                            <ScrollView contentContainerStyle={{ flexWrap: 'wrap', height: 100 }} >
                                {
                                    clubFeatures.map((item, index) => (
                                        <View style={{ marginRight: 35 }} key={index}>
                                            <Text style={{ color: '#fff', fontFamily: 'Blinker_400Regular', fontSize: 16 }}>{item}</Text>
                                        </View>
                                    ))
                                }
                            </ScrollView>
                        </View>
                        {/* <View>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Home Delivery</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Smoking Area</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Take Away</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Valet Parking</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Bar</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Alcohol Served</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Live Music</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Karaoke</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Blinker', fontSize: 16 }}>Live Sports Screening</Text>
                            </View> */}
                    </View>

                    {/* Location Container */}
                    <View style={{ borderColor: '#fff', borderRadius: 15, borderWidth: 1, marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Montserrat_700Bold', color: '#fff', fontSize: 16, marginHorizontal: 10, marginVertical: 10 }}>Locate and Contact</Text>
                        <View>
                            {/* TODO Add animation as in https://blog.logrocket.com/react-native-maps-introduction/ */}
                            <MapView style={{ width: '100%', height: 200 }} initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}>
                                <Marker coordinate={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }} />
                            </MapView>
                        </View>
                        <View style={{ marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginVertical: 10, marginHorizontal: 15 }}>
                                <Icon type='material-icon' name='location-on' color='white' size={moderateScale(15, Dimensions.SCALING_FACTOR)} />
                                <Text style={{ fontFamily: 'Blinker_400Regular', color: '#fff', fontSize: 16 }}>3rd Floor, New No-73, AG Block 4th Avenue, 7th Main Rd, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600040</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon type='material-icon' name='call' color='white' size={moderateScale(15, Dimensions.SCALING_FACTOR)} />
                                    <Text style={{ fontFamily: 'Blinker_400Regular', color: '#fff', fontSize: 16, marginHorizontal: 15 }}>044 2626 2626</Text>
                                </View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('tel:04426262626')
                                }} style={{ flexDirection: 'row', backgroundColor: '#FF4C68', borderRadius: 15 }}>
                                    <Text style={{ fontFamily: 'Blinker_600SemiBold', color: '#fff', padding: 8 }}>Call Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Recommendation Container */}
                    <View style={{ borderColor: '#fff', borderRadius: 15, borderWidth: 1, marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Montserrat_700Bold', color: '#fff', fontSize: 16, marginHorizontal: 10, marginVertical: 10 }}>Recommended Dishes</Text>
                        <View style={{ marginHorizontal: 15, marginBottom: 10 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <View style={{ marginRight: 15, alignItems: 'center' }}>
                                    <Image source={require('../../assets/images/food-1.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                                    <Text style={{ color: '#fff', fontFamily: 'Blinker_400Regular', marginTop: 5 }}>Peri Peri Chicken</Text>
                                </View>

                                <View style={{ marginRight: 15, alignItems: 'center' }}>
                                    <Image source={require('../../assets/images/food-2.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                                    <Text style={{ color: '#fff', fontFamily: 'Blinker_400Regular', marginTop: 5 }}>Peri Peri Chicken</Text>
                                </View>

                                <View style={{ marginRight: 15, alignItems: 'center' }}>
                                    <Image source={require('../../assets/images/food-3.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                                    <Text style={{ color: '#fff', fontFamily: 'Blinker_400Regular', marginTop: 5 }}>Peri Peri Chicken</Text>
                                </View>

                                <View style={{ marginRight: 15, alignItems: 'center' }}>
                                    <Image source={require('../../assets/images/food-4.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                                    <Text style={{ color: '#fff', fontFamily: 'Blinker_400Regular', marginTop: 5 }}>Peri Peri Chicken</Text>
                                </View>

                                <View style={{ marginRight: 15, alignItems: 'center' }}>
                                    <Image source={require('../../assets/images/food-5.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                                    <Text style={{ color: '#fff', fontFamily: 'Blinker_400Regular', marginTop: 5 }}>Peri Peri Chicken</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>

                    {/* Contact Us Container */}
                    <View style={{ borderColor: '#fff', borderRadius: 15, borderWidth: 1, marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Montserrat_700Bold', color: '#fff', fontSize: 16, marginHorizontal: 10, marginTop: 10 }}>Looking for help?</Text>
                        <Text style={{ fontFamily: 'Montserrat_600SemiBold', color: '#fff', fontSize: 16, marginHorizontal: 10, marginBottom: 10 }}>Talk to us now</Text>
                        {/* TODO Add Image of Contact US */}
                    </View>

                    {/* Similar Restaurants Container */}
                    {/* TODO Add shadow */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Montserrat_700Bold', color: '#fff', fontSize: 16, marginHorizontal: 10, marginVertical: 10 }}>Similar Restaurants</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={{ backgroundColor: '#1f1f1f', width: 150, height: 220, borderRadius: 15, marginRight: 10 }}>
                                <View>
                                    <Image source={require('../../assets/images/Club-1.jpg')} style={{ width: 150, height: 150, borderRadius: 15 }} />
                                </View>
                                <View style={{ marginHorizontal: 10, marginBottom: 10, marginTop: 5 }}>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat_600SemiBold' }}>Dance Again</Text>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat_400Regular' }}>Anna Nagar</Text>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat_300Light' }}>6.3 Km</Text>
                                </View>
                            </View>

                            <View style={{ backgroundColor: '#1f1f1f', width: 150, height: 220, borderRadius: 15, marginRight: 10 }}>
                                <View>
                                    <Image source={require('../../assets/images/Club-2.jpg')} style={{ width: 150, height: 150, borderRadius: 15 }} />
                                </View>
                                <View style={{ marginHorizontal: 10, marginBottom: 10, marginTop: 5 }}>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat_600SemiBold' }}>Dance Again</Text>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat_400Regular' }}>Anna Nagar</Text>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat_300Light' }}>6.3 Km</Text>
                                </View>
                            </View>

                            <View style={{ backgroundColor: '#1f1f1f', width: 150, height: 220, borderRadius: 15, marginRight: 10 }}>
                                <View>
                                    <Image source={require('../../assets/images/Club-3.jpg')} style={{ width: 150, height: 150, borderRadius: 15 }} />
                                </View>
                                <View style={{ marginHorizontal: 10, marginBottom: 10, marginTop: 5 }}>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat_600SemiBold' }}>Dance Again</Text>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat_400Regular' }}>Anna Nagar</Text>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat_300Light' }}>6.3 Km</Text>
                                </View>
                            </View>

                            <View style={{ backgroundColor: '#1f1f1f', width: 150, height: 220, borderRadius: 15, marginRight: 10 }}>
                                <View>
                                    <Image source={require('../../assets/images/Club5.jpg')} style={{ width: 150, height: 150, borderRadius: 15 }} />
                                </View>
                                <View style={{ marginHorizontal: 10, marginBottom: 10, marginTop: 5 }}>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat_600SemiBold' }}>Dance Again</Text>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat_400Regular' }}>Anna Nagar</Text>
                                    <Text style={{ color: '#fff', fontFamily: 'Montserrat_300Light' }}>6.3 Km</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default QuickLookTab