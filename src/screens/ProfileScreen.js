import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from '@rneui/themed'
import Dimensions from '../utils/Dimensions'
import Fab from '../components/Global/FAB'
import { Divider } from 'react-native-elements'
import { moderateScale } from 'react-native-size-matters'
import { signOut, getAuth } from 'firebase/auth'

const auth = getAuth()

const ProfileScreen = ({ navigation }) => {
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
            title: 'Notifications',
        },
        {
            id: 7,
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

    const logOutHandler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('signed out from profile screen')
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }

    const [user, setUser] = useState(auth.currentUser)
    const [name, setName] = useState(user.displayName)
    const [email, setEmail] = useState(user.email)
    const [dateCreated, setDateCreated] = useState(user.metadata.creationTime)
    const [formattedDate, setFormattedDate] = useState('')
    console.log(user)
    useEffect(() => {
        const date = new Date(dateCreated);
        // const options = { month: 'long', year: 'numeric' };
        // setFormattedDate(date.toDateString('en-US', options).replace(/^[a-z]+\s/, '')
        //     .replace(/,\s\d{4}/, ''))
        const options = { month: 'short', day: '2-digit', year: 'numeric' };
        const formattedDateCustom = date.toLocaleDateString('en-US', options);
        setFormattedDate(formattedDateCustom)
        // setFormattedDate(date.format)
    }, [])


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
                            {/* <Icon type={Icons.Ionicons} name='chevron-back-circle' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} /> */}
                            <Icon type='ionicon' name='chevron-back-circle' color='white' size={moderateScale(24, Dimensions.SCALING_FACTOR)} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ color: '#FF4C68', fontFamily: 'MontserratAlternates_900Black', fontSize: 22 }}>Let's Beano</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                            {/* <Icon type={Icons.Ionicons} name='search-outline' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} /> */}
                            <Icon type='ionicon' name='search-outline' color='white' size={moderateScale(24, Dimensions.SCALING_FACTOR)} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Profile */}
                <View style={{ backgroundColor: '#202121', width: '100%', borderRadius: 15, marginTop: 30, borderColor: '#FF4C68', borderWidth: 0.3 }}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 15, alignItems: 'center' }}>
                        <Image source={require('../assets/images/user-1.png')} style={{ width: 75, height: 75, borderRadius: 15 }} />
                        <View style={styles.rate}>
                            {/* <Icon type={Icons.AntDesign} name='star' color='gold' size={15} /> */}
                            <Icon type='antdesign' name='star' color='gold' size={moderateScale(18, Dimensions.SCALING_FACTOR)} />
                            <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Blinker_600SemiBold', bottom: 2 }}>4.8</Text>
                        </View>
                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Blinker_600SemiBold' }}>Member since {formattedDate}</Text>
                        {/* <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Blinker_600SemiBold' }}>Member since 10th Dec</Text> */}
                    </View>
                    <View style={{ marginHorizontal: 15, marginBottom: 25 }}>
                        <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Blinker_600SemiBold' }}>{name}</Text>
                        <Text style={{ color: '#fff', fontSize: 15, marginVertical: 5, fontFamily: 'Blinker_600SemiBold' }}>{email}</Text>
                        <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'Blinker_600SemiBold' }}>9958545037 (TODO)</Text>
                    </View>
                    <View style={styles.editProfileBtn}>
                        <TouchableOpacity>
                            <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Montserrat_700Bold' }}>EDIT PROFILE</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Activites */}
                <View style={{ marginTop: 40 }}>
                    <View style={{ backgroundColor: '#FF4C68', width: '40%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Montserrat_700Bold' }}>Activites</Text>
                    </View>
                    <Divider color='#FF4C68' width={0.7} />
                    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                        {
                            activites.map((item) => (
                                <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6, marginBottom: 5 }}>
                                    <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'Montserrat_600SemiBold' }}>{item.title}</Text>
                                    {/* <Icon type={Icons.Ionicons} name='chevron-forward-circle' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} /> */}
                                    <Icon type='ionicon' name='chevron-forward-circle' color='white' size={moderateScale(24, Dimensions.SCALING_FACTOR)} />
                                </View>
                            ))
                        }
                    </View>
                </View>

                {/* More */}
                <View style={{ marginTop: 15 }}>
                    <View style={{ backgroundColor: '#FF4C68', width: '40%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Montserrat_700Bold' }}>More</Text>
                    </View>
                    <Divider color='#FF4C68' width={0.7} />
                    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                        {
                            more.map((item) => (
                                <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6, marginBottom: 5 }}>
                                    <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'Montserrat_600SemiBold' }}>{item.title}</Text>
                                    {/* <Icon type={Icons.Ionicons} name='chevron-forward-circle' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} /> */}
                                    <Icon type='ionicon' name='chevron-forward-circle' color='white' size={moderateScale(24, Dimensions.SCALING_FACTOR)} />
                                </View>
                            ))
                        }
                    </View>
                </View>
                <View style={styles.logoutBtn}>
                    <TouchableOpacity onPress={() => { logOutHandler() }}>
                        <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Montserrat_600SemiBold', alignSelf: 'center' }}>Logout</Text>
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