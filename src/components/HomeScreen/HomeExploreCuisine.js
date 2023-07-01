import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const HomeExploreCuisine = () => {
    return (
        <View style={{ borderColor: '#fff', borderRadius: 15, borderWidth: 1, margin: 20 }}>
            <Text style={{ fontFamily: 'Montserrat_700Bold', color: '#fff', fontSize: 20, marginHorizontal: 10, marginVertical: 10 }}>Explore Cuisines</Text>
            <View style={{ marginHorizontal: 15, marginBottom: 10 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={true} indicatorStyle='white'>
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
    )
}

export default HomeExploreCuisine

const styles = StyleSheet.create({})