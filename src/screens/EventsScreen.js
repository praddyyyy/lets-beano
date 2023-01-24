import { StyleSheet, StatusBar, Text, View } from 'react-native'
import React, { useState } from 'react'
import Fab from '../components/Fab'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../components/TopBar'
import FilterDateSort from '../components/FliterDateSort'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import Dimensions from '../constants/Dimensions'
import EventsFlatlist from '../components/EventsScreen/EventsFlatlist'
import OrganizerFlatList from '../components/EventsScreen/OrganizerFlatList'

const EventsScreen = () => {

    const EventsData = [
        {
            id: '1',
            name: '2022 FIFA Finale',
            address: 'Academy LA, Chennai',
            price: 'INR 750',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: '2',
            name: "23' New Year Party",
            address: 'Cicada, Chennai',
            price: 'INR 7500',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: '3',
            name: 'Event 3',
            address: 'Address 3',
            price: 'Price 3',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: '4',
            name: 'Event 4',
            address: 'Address 4',
            price: 'Price 4',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: '5',
            name: 'Event 5',
            address: 'Address 5',
            price: 'Price 5',
            image: 'https://picsum.photos/200/300'
        }
    ]

    const OrganizerData = [
        {
            id: '1',
            name: 'Charity Cause',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: '2',
            name: 'Events B Inc.',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: '3',
            name: 'Maze Events and Experiences',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: '4',
            name: 'SS Events',
            image: 'https://picsum.photos/200/300'
        }
    ]

    const [index, setIndex] = useState(0);;
    const [routes] = useState([
        { key: 'first', title: 'Events' },
        { key: 'second', title: 'Organizers' },
    ]);

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={{ backgroundColor: '#1f1f1f' }}
            renderLabel={({ route, focused }) => (
                <Text style={{ color: focused ? 'white' : 'grey', margin: 5, fontFamily: 'Montserrat-SemiBold', fontSize: 16 }} >{route.title.toUpperCase()}</Text>
            )}
            // #TODO  dk why this is not working
            renderLazyPlaceholder={_renderLazyPlaceholder}
        />
    );

    const EventsRoute = () => (
        <View style={{ paddingHorizontal: 15, alignItems: 'center', paddingBottom: 15, backgroundColor: '#000' }}>
            <EventsFlatlist data={EventsData} />
        </View>
    )

    const OrganizersRoute = () => (
        <View style={{ paddingHorizontal: 15, alignItems: 'center', paddingVertical: 15, backgroundColor: '#000', flex: 1 }}>
            <OrganizerFlatList data={OrganizerData} />
        </View>
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
        first: EventsRoute,
        second: OrganizersRoute,
    })
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <TopBar />
            {index === 0 && <FilterDateSort type='events' />}
            <TabView
                swipeEnabled
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: Dimensions.SCREEN_WIDTH }}
                renderTabBar={renderTabBar}
            />
            <Fab current='Events' bottom={40} />
        </SafeAreaView>
    )
}

export default EventsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f1f',
    }
})