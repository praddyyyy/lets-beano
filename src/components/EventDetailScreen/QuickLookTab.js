import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Icon, { Icons } from '../global/Icons'

const QuickLookTab = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ borderWidth: 1, marginVertical: 15, borderRadius: 15, borderColor: '#fff' }}>
                    <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 10 }}>
                            <Icon type={Icons.FontAwesome5} color='#fff' name='headphones-alt' />
                            <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#fff', marginLeft: 10 }}>New Year Party . DJ Night . Exclusive Experience</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Icon type={Icons.FontAwesome5} color='#fff' name='calendar-alt' />
                            <Text style={{ fontFamily: 'Blinker-SemiBold', color: '#fff', marginLeft: 10 }}>New Year Party . DJ Night . Exclusive Experience</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default QuickLookTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        marginHorizontal: 15,
    }
})