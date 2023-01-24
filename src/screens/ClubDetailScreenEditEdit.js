import React from 'react'
import { View, StyleSheet, ListRenderItem, Image } from 'react-native'
import { MaterialTabItem, Tabs } from 'react-native-collapsible-tab-view'


const ClubDetailScreenEditEdit = ({ route }) => {
    const HEADER_HEIGHT = 250
    const clubImage = route.params.imageSrc;

    const Header = () => {
        return (
            <View style={styles.header}>
                <Image source={clubImage} resizeMode='stretch' style={{ height: '100%', width: '100%' }} />
            </View>
        )

    }

    return (
        <Tabs.Container
            renderHeader={Header}
            headerHeight={250} // optional
        // containerStyle={{ backgroundColor: 'black' }}
        >
            <Tabs.Tab name="Quick Look">
                <Tabs.ScrollView>
                    <View style={[styles.box, styles.boxA]} />
                    <View style={[styles.box, styles.boxB]} />
                </Tabs.ScrollView>
            </Tabs.Tab>
            <Tabs.Tab name="Menu">
                <Tabs.ScrollView>
                    <View style={[styles.box, styles.boxA]} />
                    <View style={[styles.box, styles.boxB]} />
                </Tabs.ScrollView>
            </Tabs.Tab>
        </Tabs.Container>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 250,
        width: '100%',
    },
    boxA: {
        backgroundColor: 'white',
    },
    boxB: {
        backgroundColor: '#D8D8D8',
    },
    header: {
        height: 250,
        width: '100%',
        backgroundColor: '#2196f3',
    },
})

export default ClubDetailScreenEditEdit
