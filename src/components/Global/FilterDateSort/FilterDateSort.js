import { Platform, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import Dimensions from '../../../utils/Dimensions'
import FilterModalComponent from './FilterModalComponent'
import SortModalComponent from './SortModalComponent'
import DateTimePicker from '@react-native-community/datetimepicker';
import FilterDateSortButtons from '../../ClubsScreen/FilterDateSort/FilterDateSortButtons'

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
        let fullDate = tempDate.getDate() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getFullYear();
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
            <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: '#fff' }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderColor: '#fff' }}>
                    <FilterDateSortButtons icon='tune' iconType='mater-community' text='Filter' pressHandler={FilterPressHandler} />
                    <View style={{ backgroundColor: '#fff', borderRadius: 10, height: 20, width: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <Text style={{ color: '#000', fontSize: 14 }}>3</Text>
                    </View>
                </View>
                {
                    type === 'events' &&
                    <View style={{ flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: '#fff' }}>
                        <FilterDateSortButtons icon='calendar-month' iconType='material-community' text={date.toDateString().slice(4, 10)} pressHandler={CalendarPressHandler} />
                    </View>
                }
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <FilterDateSortButtons icon='swap-vertical' iconType='ionicon' text='Sort' pressHandler={SortPressHandler} />
                </View>
            </View>
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
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10
    }
})