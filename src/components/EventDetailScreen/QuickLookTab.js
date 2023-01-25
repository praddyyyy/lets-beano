import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon, { Icons } from '../global/Icons'
import { Divider } from 'react-native-elements'
import MoreEventCard from '../global/MoreEventCard'
import BookNowButton from './BookNowButton'

const QuickLookTab = () => {
    const [number, onChangeNumber] = useState('');
    const moreEvents = [
        {
            id: 1,
            title: 'New Year Party',
            date: 'Saturday, 15th Nov 8:00 PM - Sunday, 16th Nov 2:00 AM',
        }
    ]
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* Highlights */}
                <View style={{ borderWidth: 1, marginVertical: 15, borderRadius: 15, borderColor: '#fff' }}>
                    <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10, marginTop: 15 }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon type={Icons.FontAwesome5} color='#fff' name='headphones-alt' />
                        </View>
                        <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#fff' }}>New Year Party . DJ Night . Exclusive Experience </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10 }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon type={Icons.FontAwesome5} color='#fff' name='calendar-alt' />
                        </View>
                        <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#fff' }}>Saturday, 15th Nov 8:00 PM - {"\n"} Sunday, 16th Nov 2:00 AM</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10 }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon type={Icons.FontAwesome} color='#fff' name='rupee' />
                        </View>
                        <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#fff' }}>5499 INR</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10 }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon type={Icons.MaterialIcons} color='#fff' name='person-outline' />
                        </View>
                        <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#fff' }}>Organized By: VB Events</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10, marginBottom: 15 }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon type={Icons.Ionicons} color='#fff' name='ios-location' />
                        </View>
                        <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#fff' }}>3rd Floor, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600 040</Text>
                        </View>
                    </View>
                </View>
                {/* Contact Details */}
                <View style={{ borderWidth: 1, marginBottom: 10, borderRadius: 15, borderColor: '#fff' }}>
                    <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#fff', fontSize: 18, marginTop: 10, marginLeft: 10 }}>CLUB</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 6 }}>
                            <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10 }}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon type={Icons.MaterialIcons} color='#fff' name='phone' />
                                </View>
                                <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#fff', fontSize: 18 }}>+91  9958545037</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10, marginBottom: 15 }}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon type={Icons.MaterialIcons} color='#fff' name='mail' />
                                </View>
                                <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#fff', fontSize: 18, color: '#FF4C68' }}>danushgopinath8502@gmail.com</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#FF4C68' }}>
                                <Icon type={Icons.MaterialIcons} color='#FF4C68' name='phone' style={{ padding: 2 }} />
                            </View>
                        </View>
                    </View>

                    <Divider />
                    {/* ORGANIZER */}

                    <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#fff', fontSize: 18, marginTop: 10, marginLeft: 10 }}>ORGANIZER</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 6 }}>
                            <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10 }}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon type={Icons.MaterialIcons} color='#fff' name='phone' />
                                </View>
                                <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#fff', fontSize: 18 }}>+91  9958545037</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginVertical: 5, marginRight: 10, marginBottom: 15 }}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon type={Icons.MaterialIcons} color='#fff' name='mail' />
                                </View>
                                <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#fff', fontSize: 18, color: '#FF4C68' }}>danushgopinath8502@gmail.com</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#FF4C68' }}>
                                <Icon type={Icons.MaterialIcons} color='#FF4C68' name='phone' style={{ padding: 2 }} />
                            </View>
                        </View>
                    </View>
                </View>

                {/* Invite your friends */}

                <View style={{ borderWidth: 1, marginBottom: 10, marginTop: 5, borderRadius: 15, borderColor: '#fff' }}>
                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon type={Icons.FontAwesome5} color='#fff' name='user-plus' />
                        </View>
                        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#fff', fontSize: 18, }}>Invite your friends!</Text>
                            <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#FF4C68', fontSize: 14, }}>Share and start coordinating</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon type={Icons.Entypo} color='#FF4C68' name='link' />
                        </View>
                    </View>
                </View>

                {/* Event details through whatsapp/sms */}

                <View style={{ borderWidth: 1, marginBottom: 10, marginTop: 5, borderRadius: 15, borderColor: '#fff' }}>
                    <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#fff', fontSize: 16, marginTop: 10, marginLeft: 10 }}>Get event details through Whatsapp/SMS</Text>
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
                            <Icon type={Icons.MaterialIcons} color='#FF4C68' name='send' />
                        </View>
                    </View>
                </View>

                {/* Explore More Events */}

                <View>
                    <Text style={{ fontFamily: 'Montserrat-Bold', color: '#fff', fontSize: 18, marginTop: 10, marginLeft: 10 }}>Explore more events...</Text>
                    <MoreEventCard />
                </View>
            </ScrollView>
            <BookNowButton />
        </View>
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
        fontFamily: 'Blinker-SemiBold',
        fontSize: 16,
    },
    
})