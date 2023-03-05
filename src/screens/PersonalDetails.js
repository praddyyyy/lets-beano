import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { signOut, getAuth, updateProfile } from 'firebase/auth';
import COLORS from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon, { Icons } from '../components/global/Icons';

// TODO change ui of dob input & validate date & save as timestamp in firestore

const auth = getAuth()

const PersonalDetails = ({ navigation }) => {
    const [firstName, onChangeFirstName] = useState('');
    const [lastName, onChangeLastName] = useState('');
    const [selectedGender, setSelectedGender] = useState(null);
    const [number, onChangeNumber] = useState('');

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [bday, setBday] = useState('DD/MM/YYYY')

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
        setBday(fDate)
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
            number: number,
            email: auth.currentUser.email,
            emailVerified: auth.currentUser.emailVerified,
            gender: selectedGender,
            dob: bday,
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
            <Text style={{ fontFamily: 'Montserrat-SemiBold', color: COLORS.primary, fontSize: 28, width: Dimensions.SCREEN_WIDTH * 0.7 }}>Help us to get to know you better</Text>

            <Text style={{ fontFamily: 'Montserrat-SemiBold', color: COLORS.white, fontSize: 16, width: Dimensions.SCREEN_WIDTH * 0.7, marginTop: 20 }}>What's your name?</Text>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    style={[styles.input, { marginRight: 10, width: Dimensions.SCREEN_WIDTH * 0.4 }]}
                    onChangeText={onChangeFirstName}
                    value={firstName}
                    placeholder='First Name'
                />
                <TextInput
                    style={[styles.input, { width: Dimensions.SCREEN_WIDTH * 0.4 }]}

                    onChangeText={onChangeLastName}
                    value={lastName}
                    placeholder='Last Name'
                />
            </View>

            <Text style={{ fontFamily: 'Montserrat-SemiBold', color: COLORS.white, fontSize: 16, width: Dimensions.SCREEN_WIDTH * 0.7, marginTop: 20 }}>We promise not to call you while you party. Enter your phone number?</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Enter your phone number"
                keyboardType="numeric"
                maxLength={10}
            />

            <Text style={{ fontFamily: 'Montserrat-SemiBold', color: COLORS.white, fontSize: 16, width: Dimensions.SCREEN_WIDTH * 0.7, marginTop: 20 }}>Date of Birth</Text>
            <View style={{ marginTop: 15 }}>
                <TouchableOpacity onPress={() => CalendarPressHandler()}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon type={Icons.MaterialCommunityIcons} name='calendar-month' color='white' size={20} style={{ marginRight: 10 }} />
                        <Text style={{ fontSize: 18, fontFamily: 'Alata', color: 'white', marginRight: 10, bottom: 3 }}>{bday}</Text>
                    </View>
                </TouchableOpacity>
            </View>
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

            <Text style={{ fontFamily: 'Montserrat-SemiBold', color: COLORS.white, fontSize: 16, width: Dimensions.SCREEN_WIDTH * 0.7, marginTop: 20 }}>Your Gender?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 10 }}>
                {genderData.map((item, index) => (
                    <View key={index}>
                        <TouchableOpacity onPress={() => setSelectedGender(item.value)} style={{ backgroundColor: selectedGender === item.title ? COLORS.primary : null, borderRadius: 10, }}>
                            <Image resizeMode='cover' source={item.image} style={{ borderRadius: 10, width: 100, height: 150, opacity: selectedGender === item.title ? 0.5 : 0.7, borderWidth: selectedGender === item.title ? 2.5 : 0, borderColor: selectedGender === item.title ? COLORS.primary : null }} />
                            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                <Text style={{ color: selectedGender === item.title ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.7)', fontSize: 20, fontFamily: 'Montserrat-Bold', textAlign: 'center' }}>{item.title.toUpperCase()}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            <View style={{ alignItems: 'center', width: '100%', marginTop: 35 }}>
                <TouchableOpacity onPress={() => submitHandler()} style={styles.createAccountButton}>
                    <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Montserrat-SemiBold', fontSize: 16 }}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default PersonalDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        padding: 15
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
    createAccountButton: {
        backgroundColor: '#FF4C68',
        paddingVertical: 15,
        marginTop: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
})