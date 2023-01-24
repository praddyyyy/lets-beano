import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import Icon, { Icons } from '../global/Icons'
import { CheckBox, Divider } from 'react-native-elements'


const ClubSortModalContent = (props) => {
    const [selectedIndex, setIndex] = useState(0);
    return (
        <SafeAreaView style={styles.modal}>
            <StatusBar />
            <View style={{ alignItems: 'center', marginBottom: 15 }}>
                <Text style={{ color: '#fff', fontSize: 24 }}>SORT BY</Text>
            </View>
            <TouchableOpacity onPress={() => {
                props.setIsSortVisible(!props.isSortVisible)
            }}
                style={{ position: 'absolute', top: 15, left: 20 }}
            >
                <Icon type={Icons.Ionicons} name='close-circle-outline' size={32} color={'white'} />
            </TouchableOpacity>

            <Divider />
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 24 }}>Relevance</Text>

                        <CheckBox
                            checked={selectedIndex === 0}
                            onPress={() => setIndex(0)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor='#fff'
                        />
                    </View>

                    <Divider />

                    <View style={{ flexDirection: 'row', marginLeft: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 24 }}>Popularity</Text>

                        <CheckBox
                            checked={selectedIndex === 1}
                            onPress={() => setIndex(1)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor='#fff'
                        />
                    </View>

                    <Divider />

                    <View style={{ flexDirection: 'row', marginLeft: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 24 }}>Ratings: High to Low</Text>

                        <CheckBox
                            checked={selectedIndex === 2}
                            onPress={() => setIndex(2)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor='#fff'
                        />
                    </View>

                    <Divider />

                    <View style={{ flexDirection: 'row', marginLeft: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 24 }}>Price: High to Low</Text>

                        <CheckBox
                            checked={selectedIndex === 3}
                            onPress={() => setIndex(3)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor='#fff'
                        />
                    </View>

                    <Divider />

                    <View style={{ flexDirection: 'row', marginLeft: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 24 }}>Price: Low to High</Text>

                        <CheckBox
                            checked={selectedIndex === 4}
                            onPress={() => setIndex(4)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor='#fff'
                        />
                    </View>

                    <Divider />

                    <View style={{ flexDirection: 'row', marginLeft: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 24 }}>Distance: Nearest First</Text>

                        <CheckBox
                            checked={selectedIndex === 5}
                            onPress={() => setIndex(5)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor='#fff'
                        />
                    </View>

                    <Divider />
                </View>

                <TouchableOpacity style={styles.applyButton} onPress={() => {
                    props.setIsSortVisible(!props.isSortVisible)
                }}
                >
                    <Text style={{ color: '#fff', fontSize: 18 }}>APPLY</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

export default ClubSortModalContent

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        padding: 15,
        backgroundColor: '#000'
    },
    applyButton: {
        backgroundColor: '#FF4C68',
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
})