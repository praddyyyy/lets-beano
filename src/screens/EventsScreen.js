import { StyleSheet, StatusBar, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import FilterDateSort from '../components/Global/FilterDateSort/FilterDateSort'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import Dimensions from '../utils/Dimensions'
import EventsFlatlist from '../components/EventsScreen/EventsFlatlist'
import OrganizerFlatList from '../components/EventsScreen/OrganizerFlatlist'
import TopBar from '../components/Global/Topbar'
import Fab from '../components/Global/FAB'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchEventDataFromFirestore } from '../redux/features/events/eventDataSlice'

import { EventsData, OrganizerData } from '../utils/test-data'

const EventsScreen = () => {
    const dispatch = useDispatch()
    const { eventData, loading, error } = useSelector(state => state.eventData)

    useEffect(() => {
        dispatch(fetchEventDataFromFirestore())
    }, [])

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
                <Text style={{ color: focused ? 'white' : 'grey', margin: 5, fontFamily: 'Montserrat_600SemiBold', fontSize: 16 }} >{route.title.toUpperCase()}</Text>
            )}
            // #TODO  dk why this is not working
            renderLazyPlaceholder={_renderLazyPlaceholder}
        />
    );

    const EventsRoute = () => {
        if (loading) {
            return (
                <View>
                    <Text style={{ color: '#fff' }}>Loading</Text>
                </View>
            )
        }
        return (
            <View View style={{ paddingHorizontal: 15, alignItems: 'center', paddingBottom: 15, backgroundColor: '#000' }}>
                <EventsFlatlist data={eventData} />
            </View>
        )
    }

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
        backgroundColor: '#000',
    }
})