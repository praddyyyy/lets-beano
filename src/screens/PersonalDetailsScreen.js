import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../utils/ThemeColors'
import Dimensions from '../utils/Dimensions'
import { Icon, Input } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar'
import { moderateScale } from 'react-native-size-matters'
import DateTimePicker from '@react-native-community/datetimepicker';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { signOut, getAuth, updateProfile } from 'firebase/auth';


// TODO change ui of dob input & validate date & save as timestamp in firestore
// TODO add validation to all inputs
// TODO add max and min dob

const auth = getAuth()

const PersonalDetailsScreen = ({ navigation }) => {
    const [firstName, onChangeFirstName] = useState('');
    const [lastName, onChangeLastName] = useState('');
    const [selectedGender, setSelectedGender] = useState(null);
    const [phoneNumber, onChangePhoneNumber] = useState('');

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [dob, setDob] = useState('DD/MM/YYYY')

    const genderData = [
        {
            title: 'male',
            value: 'male',
            image: require('../assets/images/DJ5.jpg')
        },
        {
            title: 'female',
            value: 'female',
            image: require('../assets/images/DJ6.jpg')
        },
        {
            title: 'Prefer Not To Say',
            value: 'NA',
            image: require('../assets/images/DJ7.jpg')
        }
    ]

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setDob(fDate)
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    const CalendarPressHandler = () => {
        showMode('date')
    }

    const submitHandler = async () => {
        updateProfile(auth.currentUser, {
            displayName: firstName + ' ' + lastName,
        }).then(() => {
            // Update successful
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
        await addDoc(collection(db, "users"), {
            firstName: firstName,
            lastName: lastName,
            number: phoneNumber,
            email: auth.currentUser.email,
            emailVerified: auth.currentUser.emailVerified,
            gender: selectedGender,
            dob: dob,
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            signOut(auth).then(() => {
                // Sign-out successful.
                navigation.navigate('LoginScreen')
                console.log('signed out')
            }).catch((error) => {
                // An error happened.
                console.log(error)
            }
            );
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View>
                <Text style={{ fontFamily: 'Montserrat_600SemiBold', color: COLORS.primary, fontSize: moderateScale(20, Dimensions.SCALING_FACTOR), width: Dimensions.SCREEN_WIDTH * 0.7 }}>Help us to get to know you better</Text>
                <Text style={{ fontFamily: 'Montserrat_600SemiBold', color: COLORS.white, fontSize: 16, width: Dimensions.SCREEN_WIDTH * 0.7, marginTop: 20, marginBottom: 10 }}>What's your name?</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Input
                        placeholder='First name'
                        containerStyle={{ paddingHorizontal: 0, width: Dimensions.SCREEN_WIDTH * 0.4 }}
                        inputContainerStyle={{ borderBottomWidth: 0, backgroundColor: '#fff', paddingHorizontal: 15, borderRadius: 50 }}
                    />
                    <Input
                        placeholder='Last name'
                        containerStyle={{ paddingHorizontal: 0, marginLeft: 10, width: Dimensions.SCREEN_WIDTH * 0.4 }}
                        inputContainerStyle={{ borderBottomWidth: 0, backgroundColor: '#fff', paddingHorizontal: 15, borderRadius: 50 }}
                    />
                </View>
                <Text style={{ fontFamily: 'Montserrat_600SemiBold', color: COLORS.white, fontSize: 16, width: Dimensions.SCREEN_WIDTH * 0.7, marginTop: 20, marginBottom: 10 }}>Enter your phone number</Text>
                <Input
                    placeholder='Enter your phone number'
                    containerStyle={{ paddingHorizontal: 0, width: Dimensions.SCREEN_WIDTH * 0.8 }}
                    inputContainerStyle={{ borderBottomWidth: 0, backgroundColor: '#fff', paddingHorizontal: 15, borderRadius: 8 }}
                    keyboardType='numeric'
                    maxLength={10}
                />
                <Text style={{ fontFamily: 'Montserrat_600SemiBold', color: COLORS.white, fontSize: 16, width: Dimensions.SCREEN_WIDTH * 0.7, marginTop: 20 }}>Date of Birth</Text>
                <TouchableOpacity style={{ marginTop: 15 }} onPress={() => CalendarPressHandler()}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon type='material-community' name='calendar-month' color='white' size={20} style={{ marginRight: 10 }} />
                        <Text style={{ fontSize: 18, fontFamily: 'Blinker_600SemiBold', color: 'white' }}>{dob}</Text>
                    </View>
                </TouchableOpacity>
                {show && (
                    <DateTimePicker
                        testID='dateTimePicker'
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display='default'
                        onChange={onChange}
                    />
                )}
                <Text style={{ fontFamily: 'Montserrat_600SemiBold', color: COLORS.white, fontSize: 16, width: Dimensions.SCREEN_WIDTH * 0.7, marginTop: 40, marginBottom: 10 }}>Your Gender?</Text>
                <View style={{ flexDirection: 'row', justifyContent: Dimensions.isLargeScreen() ? 'flex-start' : 'space-between', width: '100%', marginTop: 10 }}>
                    {genderData.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => setSelectedGender(item.value)} style={{ backgroundColor: selectedGender === item.value ? COLORS.primary : null, borderRadius: 10, marginRight: Dimensions.isLargeScreen() ? Dimensions.SCREEN_WIDTH * 0.08 : 0 }}>
                            <Image resizeMode='cover' source={item.image} style={{ borderRadius: 10, width: moderateScale(80, Dimensions.SCALING_FACTOR), height: moderateScale(120, Dimensions.SCALING_FACTOR), opacity: selectedGender === item.value ? 0.5 : 0.7, borderWidth: selectedGender === item.value ? 2.5 : 0, borderColor: selectedGender === item.value ? COLORS.primary : null }} />
                            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                <Text style={{ color: selectedGender === item.value ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.7)', fontSize: 20, fontFamily: 'Montserrat_700Bold', textAlign: 'center' }}>{item.title.toUpperCase()}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={{ width: '100%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <Icon type='material-community' name='shield-lock' color='white' size={20} />
                    <Text style={{ marginLeft: 5, color: 'white', fontFamily: 'Blinker_300Light', fontSize: moderateScale(10, Dimensions.SCALING_FACTOR) }}>Your information is 100% secure with us. We never share your information with third party</Text>
                </View>
                <TouchableOpacity
                    onPress={() => submitHandler()} style={styles.createAccountButton}
                >
                    {/* <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.createAccountButton}> */}
                    <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Montserrat_600SemiBold', fontSize: 16 }}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default PersonalDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: moderateScale(20, Dimensions.SCALING_FACTOR),
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    input: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        backgroundColor: '#fff',
        width: Dimensions.SCREEN_WIDTH * 0.8,
        marginVertical: 10,
    },
    inputField: {
        borderRadius: 5,
        width: Dimensions.SCREEN_WIDTH * 0.4,
    },
    createAccountButton: {
        backgroundColor: '#FF4C68',
        paddingVertical: 15,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
})