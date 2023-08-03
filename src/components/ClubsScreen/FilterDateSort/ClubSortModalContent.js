import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import { useState } from 'react'
import { Icon } from '@rneui/themed'
import { CheckBox, Divider } from 'react-native-elements'
import Dimensions from '../../../utils/Dimensions'
import { moderateScale } from 'react-native-size-matters'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { setSortBy, setSortOrder, setSortByIndex } from '../../../redux/features/clubs/clubSortSlice'

const ClubSortModalContent = (props) => {
    const dispatch = useDispatch();
    const sortByIndex = useSelector(state => state.clubSort.sortByIndex);

    // const [selectedIndex, setIndex] = useState(0);
    const [selectedIndex, setIndex] = useState(sortByIndex ? sortByIndex : 0);



    const handleApplyPress = () => {
        switch (selectedIndex) {
            case 0:
                dispatch(setSortBy('popularity'));
                dispatch(setSortOrder('desc'));
                dispatch(setSortByIndex(0));
                break;
            case 1:
                dispatch(setSortBy('rating'));
                dispatch(setSortOrder('desc'));
                dispatch(setSortByIndex(1));
                break;
            case 2:
                dispatch(setSortBy('price'));
                dispatch(setSortOrder('desc'));
                dispatch(setSortByIndex(2));
                break;
            case 3:
                dispatch(setSortBy('price'));
                dispatch(setSortOrder('asc'));
                dispatch(setSortByIndex(3));
                break;
            case 4:
                dispatch(setSortBy('distance'));
                dispatch(setSortOrder('asc'));
                dispatch(setSortByIndex(5));
                break;
            default:
                break;
        }
        props.setIsSortVisible(!props.isSortVisible)
    };

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
                <Icon type='ionicon' name='close-circle-outline' color='white' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
            </TouchableOpacity>

            <Divider />
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 24 }}>Popularity</Text>

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
                        <Text style={{ color: '#fff', fontSize: 24 }}>Ratings: High to Low</Text>

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
                        <Text style={{ color: '#fff', fontSize: 24 }}>Price: High to Low</Text>

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
                        <Text style={{ color: '#fff', fontSize: 24 }}>Price: Low to High</Text>

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
                        <Text style={{ color: '#fff', fontSize: 24 }}>Distance: Nearest First</Text>

                        <CheckBox
                            checked={selectedIndex === 4}
                            onPress={() => setIndex(4)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor='#fff'
                        />
                    </View>

                    <Divider />
                </View>

                <TouchableOpacity style={styles.applyButton} onPress={handleApplyPress}
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