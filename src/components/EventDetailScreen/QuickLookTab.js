import { StyleSheet, Text, View, ScrollView, TextInput, Share } from 'react-native'
import { useState } from 'react'
import { Icon } from '@rneui/themed'
import { moderateScale } from 'react-native-size-matters'
import Dimensions from '../../utils/Dimensions'
import { Divider } from 'react-native-elements'
// import MoreEventCard from '../global/MoreEventCard'
import BookNowButton from './BookNowButton'
import { TouchableOpacity } from 'react-native'
import { Linking } from 'react-native'
import moment from 'moment'

const QuickLookTab = (props) => {
    const { eventKeywords, start_time, end_time, eventPrice, eventOrganizedBy, eventContact } = props;
    
    const formattedEventKeywords = eventKeywords.join(' . ');

    const convertISODateToCustomFormat = (isoDateString) => {
        const formattedDate = moment(isoDateString).format("dddd, Do MMM h:mm A");
        return formattedDate;
    };

    const formattedStartTime = convertISODateToCustomFormat(start_time);
    const formattedEndTime = convertISODateToCustomFormat(end_time);


    const [number, onChangeNumber] = useState('');

    const onShare = async () => {
        try {
            await Share.share({
                message: 'https://www.google.com/',
            });
        } catch (error) {
            console.log(error)
        }
    }

    const moreEvents = [
        {
            id: 1,
            title: 'New Year Party',
            date: 'Saturday, 15th Nov 8:00 PM - Sunday, 16th Nov 2:00 AM',
        }
    ]
    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
                scrollEventThrottle={16}
                scrollEnabled={true}
            >
                <View style={styles.container}>
                    {/* Highlights */}
                    <View style={{ borderWidth: 1, marginVertical: 15, borderRadius: 15, borderColor: '#fff' }}>
                        <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10, marginTop: 15 }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                {/* <Icon type={Icons.FontAwesome5} color='#fff' name='headphones-alt' /> */}
                                <Icon type='font-awesome-5' name='headphones-alt' color='white' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                            </View>
                            <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Blinker_600SemiBold', color: '#fff' }}>{formattedEventKeywords}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10 }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                {/* <Icon type={Icons.FontAwesome5} color='#fff' name='calendar-alt' /> */}
                                <Icon type='font-awesome-5' name='calendar-alt' color='white' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                            </View>
                            <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Blinker_600SemiBold', color: '#fff' }}>{formattedStartTime} - {"\n"}{formattedEndTime}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10 }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                {/* <Icon type={Icons.FontAwesome} color='#fff' name='rupee' /> */}
                                <Icon type='font-awesome' name='rupee' color='white' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                            </View>
                            <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Blinker_600SemiBold', color: '#fff' }}>{eventPrice} INR</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10 }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                {/* <Icon type={Icons.MaterialIcons} color='#fff' name='person-outline' /> */}
                                <Icon type='material' name='person-outline' color='white' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                            </View>
                            <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Blinker_600SemiBold', color: '#fff' }}>Organized By: {eventOrganizedBy}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10, marginBottom: 15 }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                {/* <Icon type={Icons.Ionicons} color='#fff' name='ios-location' /> */}
                                <Icon type='ionicon' name='ios-location' color='white' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                            </View>
                            <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Blinker_600SemiBold', color: '#fff' }}>3rd Floor, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600 040</Text>
                            </View>
                        </View>
                    </View>
                    {/* Contact Details */}
                    <View style={{ borderWidth: 1, marginBottom: 10, borderRadius: 15, borderColor: '#fff' }}>
                        {
                            eventContact['club'] && (
                                <View>
                                    <Text style={{ fontFamily: 'Blinker_600SemiBold', color: '#fff', fontSize: 18, marginTop: 10, marginLeft: 10 }}>CLUB</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 6 }}>
                                            {
                                                eventContact['club']['phone'] && (
                                                    <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10 }}>
                                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                            {/* <Icon type={Icons.MaterialIcons} color='#fff' name='phone' /> */}
                                                            <Icon type='material' name='phone' color='white' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                                                        </View>
                                                        <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                                                            <Text style={{ fontFamily: 'Blinker_600SemiBold', color: '#fff', fontSize: 18 }}>+91  {eventContact['club']['phone']}</Text>
                                                        </View>
                                                    </View>
                                                )
                                            }
                                            {
                                                eventContact['club']['email'] && (
                                                    <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10, marginBottom: 15 }}>
                                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                            {/* <Icon type={Icons.MaterialIcons} color='#fff' name='mail' /> */}
                                                            <Icon type='material' name='mail' color='white' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                                                        </View>
                                                        <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                                                            <Text style={{ fontFamily: 'Blinker_600SemiBold', color: '#fff', fontSize: 18, color: '#FF4C68' }}>{eventContact['club']['email']}</Text>
                                                        </View>
                                                    </View>
                                                )
                                            }
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <TouchableOpacity onPress={() => {
                                                Linking.openURL(`tel:${eventContact['club']['phone']}`)
                                            }} style={{ borderWidth: 1, borderRadius: 5, borderColor: '#FF4C68' }}>
                                                {/* <Icon type={Icons.MaterialIcons} color='#FF4C68' name='phone' style={{ padding: 2 }} /> */}
                                                <Icon type='material' name='phone' color='#FF4C68' style={{ padding: 2 }} size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Divider />
                                </View>
                            )
                        }

                        {/* ORGANIZER */}
                        {
                            eventContact['organizer'] && (
                                <View>
                                    <Text style={{ fontFamily: 'Blinker_600SemiBold', color: '#fff', fontSize: 18, marginTop: 10, marginLeft: 10 }}>ORGANIZER</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 6 }}>
                                            {
                                                eventContact['organizer']['phone'] && (
                                                    <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10 }}>
                                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                            {/* <Icon type={Icons.MaterialIcons} color='#fff' name='phone' /> */}
                                                            <Icon type='material' name='phone' color='white' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                                                        </View>
                                                        <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                                                            <Text style={{ fontFamily: 'Blinker_600SemiBold', color: '#fff', fontSize: 18 }}>+91  {eventContact['organizer']['phone']}</Text>
                                                        </View>
                                                    </View>
                                                )
                                            }
                                            {
                                                eventContact['organizer']['email'] && (
                                                    <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10, marginBottom: 15 }}>
                                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                            {/* <Icon type={Icons.MaterialIcons} color='#fff' name='mail' /> */}
                                                            <Icon type='material' name='mail' color='white' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                                                        </View>
                                                        <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                                                            <Text style={{ fontFamily: 'Blinker_600SemiBold', color: '#fff', fontSize: 18, color: '#FF4C68' }}>{eventContact['organizer']['email']}</Text>
                                                        </View>
                                                    </View>
                                                )
                                            }
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <TouchableOpacity onPress={() => {
                                                Linking.openURL(`tel:${eventContact['organizer']['phone']}`)
                                            }} style={{ borderWidth: 1, borderRadius: 5, borderColor: '#FF4C68' }}>
                                                {/* <Icon type={Icons.MaterialIcons} color='#FF4C68' name='phone' style={{ padding: 2 }} /> */}
                                                <Icon type='material' name='phone' color='#FF4C68' style={{ padding: 2 }} size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        }
                    </View>

                    {/* Invite your friends */}

                    <View style={{ borderWidth: 1, marginBottom: 10, marginTop: 5, borderRadius: 15, borderColor: '#fff' }}>
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                {/* <Icon type={Icons.FontAwesome5} color='#fff' name='user-plus' /> */}
                                <Icon type='font-awesome-5' name='user-plus' color='white' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                            </View>
                            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ fontFamily: 'Blinker_600SemiBold', color: '#fff', fontSize: 18, }}>Invite your friends!</Text>
                                <Text style={{ fontFamily: 'Blinker_600SemiBold', color: '#FF4C68', fontSize: 14, }}>Share and start coordinating</Text>
                            </View>
                            <TouchableOpacity onPress={
                                async () => {
                                    await onShare()
                                }
                            } style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                {/* <Icon type={Icons.Entypo} color='#FF4C68' name='link' /> */}
                                <Icon type='entypo' name='link' color='#FF4C68' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Event details through whatsapp/sms */}

                    <View style={{ borderWidth: 1, marginBottom: 10, marginTop: 5, borderRadius: 15, borderColor: '#fff' }}>
                        <Text style={{ fontFamily: 'Blinker_600SemiBold', color: '#fff', fontSize: 16, marginTop: 10, marginLeft: 10 }}>Get event details through Whatsapp/SMS</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {/* #TODO Add country codes */}
                            <TextInput
                                style={styles.input}
                                value={number}
                                placeholder="Enter your number"
                                keyboardType="numeric"
                                onChangeText={onChangeNumber}
                                maxLength={10}
                            />
                            <View style={{ flex: 1, padding: 2, alignItems: 'center', justifyContent: 'center' }}>
                                {/* <Icon type={Icons.MaterialIcons} color='#FF4C68' name='send' /> */}
                                <Icon type='material' name='send' color='#FF4C68' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                            </View>
                        </View>
                    </View>

                    {/* Explore More Events */}

                    <View>
                        <Text style={{ fontFamily: 'Montserrat_700Bold', color: '#fff', fontSize: 18, marginTop: 10, marginLeft: 10 }}>Explore more events...</Text>
                        {/* <MoreEventCard /> */}
                    </View>
                </View>
            </ScrollView>
            <BookNowButton />
        </View >
    )
}

export default QuickLookTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        marginHorizontal: 15,
    },
    input: {
        flex: 4,
        height: 40,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
        paddingLeft: 15,
        fontFamily: 'Blinker_600SemiBold',
        fontSize: 16,
    },

})