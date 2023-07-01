import { StyleSheet, Text, View, Image, StatusBar, useWindowDimensions, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Icon } from '@rneui/themed'
import Dimensions from '../utils/Dimensions';
import MenuTab from '../components/ClubDetailScreen/MenuTab';
import QuickLookTab from '../components/ClubDetailScreen/QuickLookTab';
import { useNavigation } from '@react-navigation/native';
import OffersTab from '../components/ClubDetailScreen/OffersTab';
import ReviewTab from '../components/ClubDetailScreen/ReviewTab';
import { moderateScale } from 'react-native-size-matters';



const ClubDetailScreen = ({ route }) => {
    const clubName = route.params.title;
    const clubImage = route.params.imageSrc;
    const clubLocation = route.params.clubLocation;
    const clubHighlights = route.params.clubHighlights;
    const clubRating = route.params.clubRating;
    const clubPriceForTwo = route.params.clubPriceForTwo;
    const clubFeatures = route.params.clubFeatures;
    const clubPhone = route.params.clubPhone;
    const clubEmail = route.params.clubEmail;
    const clubId = route.params.clubId;

    const navigation = useNavigation()

    // const HEADER_HEIGHT = 250;
    // const scrollY = useRef(new Animated.Value(0)).current;
    // const scrollY = useSharedValue(0)
    // const scrolling = useRef(new Animated.Value(0)).current;
    // const [yValue, setYValue] = useState(0);
    // const animation = useDynamicAnimation(() => {
    //     return {
    //         width: '100%',
    //         height: 250
    //     }
    // })
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Quick Look' },
        { key: 'second', title: 'Menu' },
        { key: 'third', title: 'Offers' },
        { key: 'fourth', title: 'Review' },
    ]);


    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={{ backgroundColor: '#1f1f1f' }}
            renderLabel={({ route, focused }) => (
                <Text style={{ color: focused ? 'white' : 'grey', fontFamily: 'Montserrat_600SemiBold', fontSize: 13 }} >{route.title}</Text>
            )}
            // #TODO  dk why this is not working
            renderLazyPlaceholder={_renderLazyPlaceholder}
        />
    );

    const QuickLookRoute = () => (
        // TODO send club location
        <QuickLookTab clubName={clubName} clubLocation={clubLocation} clubHighlights={clubHighlights} clubPriceForTwo={clubPriceForTwo} clubFeatures={clubFeatures} />
    );

    const MenuRoute = () => (
        <>
            <MenuTab />
        </>
    );


    const OffersRoute = () => (
        <>
            <OffersTab />
        </>

    )

    const ReviewRoute = () => (
        <>
            <ReviewTab />
        </>
    );

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
        second: MenuRoute,
        third: OffersRoute,
        fourth: ReviewRoute,
    });

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={{ height: index != 1 ? Dimensions.SCREEN_HEIGHT * 0.22 : 0, width: index != 1 ? '100%' : 0 }} >
                {/* <Image source={{ uri: clubImage }} style={{ height: '100%', width: '100%' }} /> */}
                <Image source={clubImage} style={{ height: '100%', width: '100%' }} />
                <TouchableOpacity style={{ position: 'absolute', top: 20, left: 20 }} onPress={() => navigation.goBack()}>
                    <Icon type='ionicon' name='chevron-back-circle' color='white' size={moderateScale(25, Dimensions.SCALING_FACTOR)} />
                    {/* <Icon type={Icons.Ionicons} name='chevron-back-circle' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} /> */}
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', backgroundColor: '#1f1f1f', top: 0, height: index == 1 ? 60 : 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon type='ionicon' name='chevron-back-circle' color='white' style={{ marginRight: 5 }} size={moderateScale(25, Dimensions.SCALING_FACTOR)} />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'Montserrat_600SemiBold', color: '#fff' }}>{clubName}</Text>
                </View>
                <View style={{ marginRight: 15 }}>
                    <Icon type='material-community' name='share' color='white' size={moderateScale(22, Dimensions.SCALING_FACTOR)} />
                    {/* <Icon type={Icons.MaterialCommunityIcons} name='share' color='white' size={Dimensions.SCREEN_HEIGHT * 0.035} /> */}
                </View>
            </View>
            <TabView
                swipeEnabled={index == 1 ? false : true}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </View >
    )
}

export default ClubDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: -1,
    },
    location: {
        fontSize: 16,
    },
    date: {
        fontSize: 12,
    },
    itemContainer: {
        height: 70,
        padding: 10 * 2,
    },
    itemContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    overflowContainer: {
        height: 70,
        overflow: 'hidden',
    },
});