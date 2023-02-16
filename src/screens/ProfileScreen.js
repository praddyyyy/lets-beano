import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../components/global/TopBar'
import Icon, { Icons } from '../components/global/Icons'
import { useNavigation } from '@react-navigation/native'
import Dimensions from '../constants/Dimensions'
import Fab from '../components/global/Fab'
import { Divider } from 'react-native-elements'

const ProfileScreen = () => {
    const navigation = useNavigation()
    const activites = [
        {
            id: 1,
            title: 'Payments',
        },
        {
            id: 2,
            title: 'Booking History',
        },
        {
            id: 3,
            title: 'Coupons',
        },
        {
            id: 4,
            title: 'Refer & Earn',
        },
        {
            id: 5,
            title: 'My Reviews',
        },
        {
            id: 6,
            title: 'Coupons',
        },
        {
            id: 7,
            title: 'Notifications',
        },
        {
            id: 8,
            title: 'Favorites',
        }
    ]

    const more = [
        {
            id: 1,
            title: 'Help & Support',
        },
        {
            id: 2,
            title: 'FAQs',
        },
        {
            id: 3,
            title: 'About Us',
        },
        {
            id: 4,
            title: 'Privacy Policy',
        },
        {
            id: 5,
            title: 'Terms & Conditions',
        },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 175 }}
            >
                {/* TopBar */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }}>
                            {/*  Icon Size: 28 */}
                            <Icon type={Icons.Ionicons} name='chevron-back-circle' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ color: '#FF4C68', fontSize: 22 }}>Let's Beano</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                            <Icon type={Icons.Ionicons} name='search-outline' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Profile */}
                <View style={{ backgroundColor: '#202121', width: '100%', borderRadius: 15, marginTop: 30, borderColor: '#FF4C68', borderWidth: 1 }}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 15, alignItems: 'center' }}>
                        <Image source={require('../assets/images/user-1.png')} style={{ width: 75, height: 75, borderRadius: 15 }} />
                        <View style={styles.rate}>
                            <Icon type={Icons.AntDesign} name='star' color='gold' size={15} />
                            <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Alata', bottom: 2 }}>4.8</Text>
                        </View>
                        <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'Alata' }}>Member since Oct 2022</Text>
                    </View>
                    <View style={{ marginHorizontal: 15, marginBottom: 25 }}>
                        <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Alata' }}>Danush Gopinath</Text>
                        <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'Alata' }}>danushgopinath8502@gmail.com</Text>
                        <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'Alata' }}>9958545037</Text>
                    </View>
                    <View style={styles.editProfileBtn}>
                        <TouchableOpacity>
                            <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'Alata' }}>EDIT PROFILE</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Activites */}
                <View style={{ marginTop: 40 }}>
                    <View style={{ backgroundColor: '#FF4C68', width: '40%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'Alata' }}>Activites</Text>
                    </View>
                    <Divider color='#FF4C68' width={1} />
                    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                        {
                            activites.map((item) => (
                                <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6, marginBottom: 5 }}>
                                    <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'Montserrat' }}>{item.title}</Text>
                                    <Icon type={Icons.Ionicons} name='chevron-forward-circle' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
                                </View>
                            ))
                        }
                    </View>
                </View>

                {/* More */}
                <View style={{ marginTop: 15 }}>
                    <View style={{ backgroundColor: '#FF4C68', width: '40%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'Alata' }}>More</Text>
                    </View>
                    <Divider color='#FF4C68' width={1} />
                    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                        {
                            more.map((item) => (
                                <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6, marginBottom: 5 }}>
                                    <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'Montserrat' }}>{item.title}</Text>
                                    <Icon type={Icons.Ionicons} name='chevron-forward-circle' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
                                </View>
                            ))
                        }
                    </View>
                </View>
                <View style={styles.logoutBtn}>
                    <TouchableOpacity onPress={() => { navigation.navigate('IndexScreen') }}>
                        <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'Montserrat', alignSelf: 'center' }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Fab current='Profile' bottom={40} />
        </SafeAreaView >
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // TODO change background color (#101010 or #141414)
        backgroundColor: '#101010',
        paddingHorizontal: 15,
        paddingTop: 10
    },

    rate: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        height: 22,
        width: 55,
        borderRadius: 50,
        margin: 15
    },
    editProfileBtn: {
        backgroundColor: '#FF4C68',
        width: '40%',
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: -15,
    },
    logoutBtn: {
        backgroundColor: '#FF4C68',
        width: '40%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 40,
        marginTop: 15
    }
})