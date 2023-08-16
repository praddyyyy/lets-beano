import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import { useState } from 'react'
import { Icon } from '@rneui/themed'
// import { Slider } from '@rneui/themed';
import Dimensions from '../../../utils/Dimensions'
import FilterSectionButton from '../../Global/FilterDateSort/FilterSectionButton'
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../../utils/ThemeColors';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setPriceFilter, resetFilter } from '../../../redux/features/clubs/clubFilterSlice';

const ClubFilterModalContent = (props) => {
    const dispatch = useDispatch();
    const priceFilter = useSelector(state => state.clubFilter.priceFilter);

    // const handleResetFilter = () => {
    //     dispatch(resetFilter());
    // };

    const [sliderValues, setSliderValues] = useState(priceFilter ? priceFilter : [0, 5000]);

    const handleApplyFilter = () => {
        dispatch(setPriceFilter(sliderValues));
        props.setIsFilterVisible(!props.isFilterVisible)
    };

    const onSliderValuesChange = (values) => {
        setSliderValues(values);
    };

    const handleClearFilterPress = () => {
        dispatch(resetFilter());
        setSliderValues([0, 5000]);
    };

    return (
        <SafeAreaView style={styles.modal}>
            <StatusBar />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    onPress={() => {
                        props.setIsFilterVisible(!props.isFilterVisible)
                    }}
                    activeOpacity={0.5}
                >
                    <Icon type='ionicon' name='close-circle-outline' color='white' size={moderateScale(24, Dimensions.SCALING_FACTOR)} />
                </TouchableOpacity>
                <Text style={{ color: '#fff', fontSize: 24, fontFamily: 'Montserrat_600SemiBold' }}>FILTER</Text>
                <TouchableOpacity
                    onPress={handleClearFilterPress}
                    activeOpacity={0.5}
                >
                    <Icon type='ionicon' name='trash-outline' color='white' size={moderateScale(24, Dimensions.SCALING_FACTOR)} />
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 15, marginVertical: 15, borderWidth: 1, borderColor: '#fff', borderRadius: 15 }}>
                <Text style={{ color: '#fff', marginHorizontal: 15, marginTop: 10 }}>CATEGORIES</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 10 }}>
                    <FilterSectionButton text='Casual Dining' />
                    <FilterSectionButton text='Luxury Dining' />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: 10 }}>
                    <FilterSectionButton text='Hotel Dining' />
                    <FilterSectionButton text='Bar/Pub' />
                </View>
            </View>
            {/* TODO custom slider thumb icon */}
            <View style={{ marginHorizontal: 15, borderWidth: 1, borderColor: '#fff', borderRadius: 15 }}>
                <Text style={{ color: '#fff', marginHorizontal: 15, marginTop: 10 }}>COST FOR TWO (INR {sliderValues[0]} - INR {sliderValues[1]})</Text>
                <View style={{ marginHorizontal: 15 }}>
                    <MultiSlider
                        values={sliderValues}
                        onValuesChange={onSliderValuesChange}
                        min={0}
                        max={5000}
                        step={100}
                        sliderLength={280} // Adjust the length of the slider as needed
                        allowOverlap={false} // Set to true if you want the ranges to overlap
                        snapped={true} // Set to true to snap the values to the step
                        selectedStyle={{
                            backgroundColor: COLORS.white,
                        }}
                        markerStyle={{
                            height: 15,
                            width: 15,
                            backgroundColor: COLORS.white,
                        }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={{ color: '#fff' }}>INR 0</Text>
                        <Text style={{ color: '#fff' }}>INR 5000+</Text>
                    </View>
                </View>
            </View>
            {/* TYPE OF MEAL */}
            <View style={{ marginHorizontal: 15, marginVertical: 15, borderWidth: 1, borderColor: '#fff', borderRadius: 15 }}>
                <Text style={{ color: '#fff', marginHorizontal: 15, marginTop: 10 }}>TYPE OF MEAL</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 10 }}>
                    <FilterSectionButton text="A'la Carte" />
                    <FilterSectionButton text='Buffet' />
                </View>
            </View>
            {/* DEALS */}
            <View style={{ marginHorizontal: 15, borderWidth: 1, borderColor: '#fff', borderRadius: 15 }}>
                <Text style={{ color: '#fff', marginHorizontal: 15, marginTop: 10 }}>DEALS</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 10 }}>
                    <FilterSectionButton text='20% Discount' />
                    <FilterSectionButton text='15% Discount' />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: 10 }}>
                    <FilterSectionButton text='10% Discount' />
                    <FilterSectionButton text='Happy Hours' />
                </View>
            </View>
            {/* CUISINES */}
            <View style={{ marginHorizontal: 15, marginVertical: 15, borderWidth: 1, borderColor: '#fff', borderRadius: 15 }}>
                <Text style={{ color: '#fff', marginHorizontal: 15, marginTop: 10 }}>CUISINES</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 10 }}>
                    <FilterSectionButton text='North Indian' />
                    <FilterSectionButton text='Chinese' />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: 10 }}>
                    <FilterSectionButton text='Italian' />
                    <FilterSectionButton text='Fast Food' />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: 10 }}>
                    <FilterSectionButton text='Pan Asian' />
                    <FilterSectionButton text='Cafe' />
                </View>
            </View>
            <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilter}
            >
                <Text style={{ color: '#fff', fontSize: 18 }}>APPLY</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ClubFilterModalContent

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        padding: 15,
        backgroundColor: COLORS.background
    },
    applyButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: 15,
        marginHorizontal: 15,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})