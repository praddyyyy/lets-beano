import { Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const HomeExploreCuisine = () => {
    return (
        <View style={{ borderColor: '#fff', borderRadius: 15, borderWidth: 1, marginHorizontal: 20, marginBottom: 15 }}>
            <Text style={{ fontFamily: 'Montserrat_700Bold', color: '#fff', fontSize: 18, marginHorizontal: 10, marginVertical: 10 }}>Explore Cuisines</Text>
            <View style={{ marginHorizontal: 15, marginBottom: 10 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} indicatorStyle='white'>
                    <View style={{ marginRight: 10, alignItems: 'center' }}>
                        <Image source={require('../../assets/images/food-1.jpg')} style={{ width: 80, height: 80, borderRadius: 50 }} />
                        <Text style={{ color: '#fff', fontFamily: 'Blinker_400Regular', marginTop: 5 }}>North Indian</Text>
                    </View>
                    <View style={{ marginRight: 10, alignItems: 'center' }}>
                        <Image source={require('../../assets/images/food-1.jpg')} style={{ width: 80, height: 80, borderRadius: 50 }} />
                        <Text style={{ color: '#fff', fontFamily: 'Blinker_400Regular', marginTop: 5 }}>North Indian</Text>
                    </View>
                    <View style={{ marginRight: 10, alignItems: 'center' }}>
                        <Image source={require('../../assets/images/food-1.jpg')} style={{ width: 80, height: 80, borderRadius: 50 }} />
                        <Text style={{ color: '#fff', fontFamily: 'Blinker_400Regular', marginTop: 5 }}>North Indian</Text>
                    </View>
                    <View style={{ marginRight: 10, alignItems: 'center' }}>
                        <Image source={require('../../assets/images/food-1.jpg')} style={{ width: 80, height: 80, borderRadius: 50 }} />
                        <Text style={{ color: '#fff', fontFamily: 'Blinker_400Regular', marginTop: 5 }}>North Indian</Text>
                    </View>
                    <View style={{ marginRight: 10, alignItems: 'center' }}>
                        <Image source={require('../../assets/images/food-1.jpg')} style={{ width: 80, height: 80, borderRadius: 50 }} />
                        <Text style={{ color: '#fff', fontFamily: 'Blinker_400Regular', marginTop: 5 }}>North Indian</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default HomeExploreCuisine