import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet, Animated } from 'react-native';

const data = [
    { id: '1', title: 'Title 1' },
    { id: '2', title: 'Title 2' },
    { id: '3', title: 'Title 3' },
    { id: '4', title: 'Title 4' },
    { id: '5', title: 'Title 5' },
    { id: '6', title: 'Title 6' },
    { id: '7', title: 'Title 7' },
    { id: '8', title: 'Title 8' },
    { id: '9', title: 'Title 9' },
    { id: '10', title: 'Title 10' },
    { id: '11', title: 'Title 11' },
    { id: '12', title: 'Title 12' },
    { id: '13', title: 'Title 13' },
    { id: '14', title: 'Title 14' },
    { id: '15', title: 'Title 15' },
    { id: '16', title: 'Title 16' },
    { id: '17', title: 'Title 17' },
    { id: '18', title: 'Title 18' },
    { id: '19', title: 'Title 19' },
    { id: '20', title: 'Title 20' },
]

const DJScreen = () => {
    const [offsetY, setOffsetY] = useState(0);
    function onScroll(event) {
        const { nativeEvent } = event;
        const { contentOffset } = nativeEvent;
        const { y } = contentOffset;
        setOffsetY(y);
        console.log(offsetY)
    }
    function handleRelease() {
        if (this.state.readyToRefresh) {
            this.flatList.scrollToOffset({ offset: -130 });
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                ref={(flatList) => {
                    flatList = flatList;
                }}
                data={data}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingTop: 120 }}
                renderItem={({ item }) =>
                    <View style={styles.container}>
                        <Text>{item.title}</Text>
                    </View>
                }
                onScroll={onScroll}
                scrollEventThrottle={16}
                scrollToOverflowEnabled={true}
                onResponderRelease={handleRelease}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default DJScreen;
