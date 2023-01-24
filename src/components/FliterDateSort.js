import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import Dimensions from '../constants/Dimensions'
import FilterDateSortButtons from './ClubScreen/FilterDateSortButtons'
import FilterModalComponent from './FilterModalComponent'
import DateTimePicker from '@react-native-community/datetimepicker';
import SortModalComponent from './SortModalComponent'

const FilterDateSort = (props) => {
    const { type } = props;
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getFullYear();
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const FilterPressHandler = () => {
        return (
            setIsFilterVisible(true)
        )
    }

    const CalendarPressHandler = () => {
        showMode('date')
    }

    const [isSortVisible, setIsSortVisible] = useState(false);

    const SortPressHandler = () => {
        return (
            setIsSortVisible(true)
        )
    }
    return (
        <View style={styles.container}>
            <FilterModalComponent type={type} isFilterVisible={isFilterVisible} setIsFilterVisible={setIsFilterVisible} />
            <SortModalComponent isSortVisible={isSortVisible} setIsSortVisible={setIsSortVisible} />
            <FilterDateSortButtons icon='tune' text='Filter' pressHandler={FilterPressHandler} />
            <FilterDateSortButtons icon='calendar-month' text={date.toDateString().slice(4, 10)} pressHandler={CalendarPressHandler} />
            <FilterDateSortButtons icon='swap-vertical' text='Sort' pressHandler={SortPressHandler} />
            {show && (
                <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={onChange}
                />
            )}
        </View>
    )
}

export default FilterDateSort

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: Dimensions.SCREEN_HEIGHT * 0.07,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})