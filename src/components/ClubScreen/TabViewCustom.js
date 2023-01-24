import React, { useState } from 'react';
import { View, Text, Dimensions, Animated } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const TabViewCustom = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'tab1', title: 'Tab 1' },
        { key: 'tab2', title: 'Tab 2' },
        { key: 'tab3', title: 'Tab 3' },
    ]);

    const [position] = useState(new Animated.Value(0));

    const customAnimation = ({ position, layout }) => {
        const inputRange = routes.map((_, i) => i);
        const translateX = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => {
                return layout.isRTL ? -i * layout.width : i * layout.width;
            }),
        });

        return { transform: [{ translateX }] };
    };

    const renderScene = SceneMap({
        tab1: Tab1,
        tab2: Tab2,
        tab3: Tab3,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: Dimensions.get('window').width }}
            animation={customAnimation}
        />
    );
};

const Tab1 = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tab 1 Content</Text>
    </View>
);

const Tab2 = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tab 2 Content</Text>
    </View>
);

const Tab3 = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tab 3 Content</Text>
    </View>
);

export default TabViewCustom
