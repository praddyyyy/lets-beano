import { StyleSheet, Text, View, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import Icon, { Icons } from '../components/global/Icons';
import Dimensions from '../constants/Dimensions';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QuickLookTab from '../components/EventDetailScreen/QuickLookTab';
// import VenueTab from '../components/EventDetailScreen/VenueTab';
// import ArtistTab from '../components/EventDetailScreen/ArtistTab';
// import TnCTab from '../components/EventDetailScreen/TnCTab';

const EventDetailScreen = ({ route }) => {
    const eventName = route.params.eventName;
    const eventImage = route.params.imageUri;
    const eventAddress = route.params.eventAddress;
    const eventPrice = route.params.eventPrice;

    const navigation = useNavigation()

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Quick Look' },
        { key: 'second', title: 'Venue' },
        { key: 'third', title: 'Artist' },
        { key: 'fourth', title: 'T&C' },
    ]);

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={{ backgroundColor: '#1f1f1f' }}
            renderLabel={({ route, focused }) => (
                <Text style={{ color: focused ? 'white' : 'grey', fontFamily: 'Montserrat-SemiBold', fontSize: 13 }} >{route.title}</Text>
            )}
            // #TODO  dk why this is not working
            renderLazyPlaceholder={_renderLazyPlaceholder}
        />
    );

    const QuickLookRoute = () => (
        <>
            <QuickLookTab />
        </>
    )

    const VenueRoute = () => (
        <View style={{ flex: 1, backgroundColor: 'green' }} />
    )

    const ArtistRoute = () => (
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
    )

    const TnCRoute = () => (
        <View style={{ flex: 1, backgroundColor: 'yellow' }} />
    )

    // This is our placeholder component for the tabs
    // This will be rendered when a tab isn't loaded yet
    // You could also customize it to render different content depending on the route
    // TODO Check if this is working
    const LazyPlaceholder = ({ route }) => (
        <View style={styles.scene}>
            <Text>Loading {route.title}…</Text>
        </View>
    );

    const _renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;

    const renderScene = SceneMap({
        first: QuickLookRoute,
        second: VenueRoute,
        third: ArtistRoute,
        fourth: TnCRoute,
    });


    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: 300, width: '100%' }}>
                <Image source={{ uri: eventImage }} resizeMode='stretch' style={{ height: 300, width: '100%' }} />
                <TouchableOpacity style={{ position: 'absolute', top: 20, left: 20 }} onPress={() => navigation.goBack()}>
                    <Icon type={Icons.Ionicons} name='chevron-back-circle' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 15, alignItems: 'center', paddingVertical: 10 }}>
                <Text style={{ color: '#fff', fontFamily: 'Montserrat-Bold', fontSize: 28 }}>{eventName}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 15, }}>
                <View style={{ alignItems: 'center' }}>
                    <Icon type={Icons.FontAwesome5} name='calendar-alt' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
                    <Text style={{ color: '#fff', fontFamily: 'Montserrat', marginVertical: 5 }}>15th Nov</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Icon type={Icons.FontAwesome5} name='clock' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
                    <Text style={{ color: '#fff', fontFamily: 'Montserrat', marginVertical: 5 }}>8:00 PM</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Icon type={Icons.Ionicons} name='location' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} />
                    {/* #TODO get address from prop */}
                    <Text style={{ color: '#fff', fontFamily: 'Montserrat', marginVertical: 5 }}>Academy LA</Text>
                </View>
            </View>

            <TabView
                swipeEnabled
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </SafeAreaView>
    )
}

export default EventDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    }
})