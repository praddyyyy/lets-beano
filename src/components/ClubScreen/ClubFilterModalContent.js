import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import Icon, { Icons } from '../global/Icons'
import FilterSectionButton from '../global/FilterSectionButton'
import { Slider } from 'react-native-elements'


const ClubFilterModalContent = (props) => {
    const [sliderValue, setSliderValue] = useState(0)
    return (
        <SafeAreaView style={styles.modal}>
            <StatusBar />
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 24 }}>FILTER</Text>
            </View>
            <TouchableOpacity onPress={() => {
                props.setIsFilterVisible(!props.isFilterVisible)
            }}
                style={{ position: 'absolute', top: 15, left: 20 }}
            >
                <Icon type={Icons.Ionicons} name='close-circle-outline' size={32} color={'white'} />
            </TouchableOpacity>
            <View style={{ marginHorizontal: 15, marginVertical: 15, borderWidth: 1, borderColor: '#fff', borderRadius: 15 }}>
                <Text style={{ color: '#fff', marginHorizontal: 15, marginTop: 10 }}>CATEGORIES</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 10 }}>
                    <FilterSectionButton text='Casual Dining' />
                    <FilterSectionButton text='Luxury Dining' />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: 10 }}>
                    <FilterSectionButton text='Hotel Dining' />
                    <FilterSectionButton text='Bar/Pub' />
                </View>
            </View>
            {/* TODO custom slider thumb icon */}
            <View style={{ marginHorizontal: 15, borderWidth: 1, borderColor: '#fff', borderRadius: 15 }}>
                <Text style={{ color: '#fff', marginHorizontal: 15, marginTop: 10 }}>COST FOR TWO (INR {sliderValue})</Text>
                <View style={{ marginHorizontal: 15 }}>
                    <Slider
                        value={sliderValue}
                        onValueChange={value => {
                            setSliderValue(Math.round(value))
                        }}
                        minimumValue={0}
                        maximumValue={5000}
                        thumbTintColor={'#fff'}
                        thumbStyle={{ width: 20, height: 20 }}
                        step={500}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={{ color: '#fff' }}>INR 0</Text>
                        <Text style={{ color: '#fff' }}>INR 5000+</Text>
                    </View>
                </View>
            </View>
            {/* TYPE OF MEAL */}
            <View style={{ marginHorizontal: 15, marginVertical: 15, borderWidth: 1, borderColor: '#fff', borderRadius: 15 }}>
                <Text style={{ color: '#fff', marginHorizontal: 15, marginTop: 10 }}>TYPE OF MEAL</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 10 }}>
                    <FilterSectionButton text="A'la Carte" />
                    <FilterSectionButton text='Buffet' />
                </View>
            </View>
            {/* DEALS */}
            <View style={{ marginHorizontal: 15, borderWidth: 1, borderColor: '#fff', borderRadius: 15 }}>
                <Text style={{ color: '#fff', marginHorizontal: 15, marginTop: 10 }}>DEALS</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 10 }}>
                    <FilterSectionButton text='20% Discount' />
                    <FilterSectionButton text='15% Discount' />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: 10 }}>
                    <FilterSectionButton text='10% Discount' />
                    <FilterSectionButton text='Happy Hours' />
                </View>
            </View>
            {/* CUISINES */}
            <View style={{ marginHorizontal: 15, marginVertical: 15, borderWidth: 1, borderColor: '#fff', borderRadius: 15 }}>
                <Text style={{ color: '#fff', marginHorizontal: 15, marginTop: 10 }}>CUISINES</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 10 }}>
                    <FilterSectionButton text='North Indian' />
                    <FilterSectionButton text='Chinese' />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: 10 }}>
                    <FilterSectionButton text='Italian' />
                    <FilterSectionButton text='Fast Food' />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: 10 }}>
                    <FilterSectionButton text='Pan Asian' />
                    <FilterSectionButton text='Cafe' />
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.applyButton} onPress={() => {
                    props.setIsFilterVisible(!props.isFilterVisible)
                }}
                >
                    <Text style={{ color: '#fff', fontSize: 18 }}>APPLY</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

export default ClubFilterModalContent

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        padding: 15,
        backgroundColor: '#000'
    },
    applyButton: {
        backgroundColor: '#FF4C68',
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})