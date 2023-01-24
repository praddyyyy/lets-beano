import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import Icon, { Icons } from '../global/Icons'
import FilterSectionButton from '../global/FilterSectionButton'
import { Slider } from 'react-native-elements'


const EventFilterModalContent = (props) => {
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
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View>
                    <View style={{ marginHorizontal: 15, marginVertical: 15, borderWidth: 1, borderColor: '#fff', borderRadius: 15 }}>
                        <Text style={{ color: '#fff', marginHorizontal: 15, marginTop: 10 }}>CATEGORIES</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 10 }}>
                            <FilterSectionButton text='EDM' />
                            <FilterSectionButton text='DJ Night' />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: 10 }}>
                            <FilterSectionButton text='Bollywood Night' />
                            <FilterSectionButton text='Ladies Night' />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: 10 }}>
                            <FilterSectionButton text='Regional Night' />
                            <FilterSectionButton text='Corporate Night' />
                        </View>
                    </View>
                    {/* TODO custom slider thumb icon */}
                    <View style={{ marginHorizontal: 15, borderWidth: 1, borderColor: '#fff', borderRadius: 15 }}>
                        <Text style={{ color: '#fff', marginHorizontal: 15, marginTop: 10 }}>PRICE (INR {sliderValue})</Text>
                        <View style={{ marginHorizontal: 15 }}>
                            <Slider
                                value={sliderValue}
                                onValueChange={value => {
                                    setSliderValue(Math.round(value))
                                }}
                                minimumValue={0}
                                maximumValue={10000}
                                thumbTintColor={'#fff'}
                                thumbStyle={{ width: 20, height: 20 }}
                                step={500}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                                <Text style={{ color: '#fff' }}>INR 0</Text>
                                <Text style={{ color: '#fff' }}>INR 10000+</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                                <TouchableOpacity style={{ backgroundColor: "#fff", height: 35, justifyContent: 'center', borderRadius: 50, paddingHorizontal: 25 }}>
                                    <Text style={{ textAlign: 'center' }}>All</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: "#fff", height: 35, justifyContent: 'center', borderRadius: 50, paddingHorizontal: 25 }}>
                                    <Text style={{ textAlign: 'center' }}>Free</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: "#fff", height: 35, justifyContent: 'center', borderRadius: 50, paddingHorizontal: 25 }}>
                                    <Text style={{ textAlign: 'center' }}>Ticketed Events</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* TIME */}
                    <View style={{ marginHorizontal: 15, marginVertical: 15, borderWidth: 1, borderColor: '#fff', borderRadius: 15 }}>
                        <Text style={{ color: '#fff', marginHorizontal: 15, marginTop: 10 }}>TIME</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 10 }}>
                            <FilterSectionButton text="Noon" />
                            <FilterSectionButton text='Night' />
                        </View>
                    </View>
                    {/* Location */}
                    {/* #TODO idk why */}
                    <View style={{ marginHorizontal: 15, borderWidth: 1, borderColor: '#fff', borderRadius: 15 }}>
                        <Text style={{ color: '#fff', marginHorizontal: 15, marginTop: 10 }}>LOCATION</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 10 }}>
                            <TouchableOpacity style={{ backgroundColor: "#fff", height: 35, justifyContent: 'center', borderRadius: 50, paddingHorizontal: 25 }}>
                                <Text style={{ textAlign: 'center' }}>Area</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: "#fff", height: 35, justifyContent: 'center', borderRadius: 50, paddingHorizontal: 25 }}>
                                <Text style={{ textAlign: 'center' }}>City</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: "#fff", height: 35, justifyContent: 'center', borderRadius: 50, paddingHorizontal: 15 }}>
                                <Text style={{ textAlign: 'center' }}>Nation Wide</Text>
                            </TouchableOpacity>
                        </View>
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
            </View>
        </SafeAreaView >
    )
}

export default EventFilterModalContent

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
        marginBottom: 20
    },
})