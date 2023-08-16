import { Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addCategoriesTagsFilter, removeCategoriesTagsFilter } from '../../../redux/features/clubs/clubFilterSlice'


const FilterSectionButton = (props) => {
    const dispatch = useDispatch()

    const selectedFilters = useSelector(state => state.clubFilter.categoriesTagsFilter)
    // console.log(selectedFilters)

    const handleFilterPress = () => {
        if (selectedFilters.includes(props.text)) {
            dispatch(removeCategoriesTagsFilter(props.text));
        } else {
            dispatch(addCategoriesTagsFilter(props.text));
        }
    }

    return (
        // <>
        //     {
        //         isPressed ?
        //             <TouchableOpacity activeOpacity={0.8} onPress={handleFilterPress} style={{ backgroundColor: "#ff4c68", height: 35, justifyContent: 'center', borderRadius: 50, width: '48%' }}>
        //                 <Text style={{ textAlign: 'center', color: '#fff' }}>{props.text}</Text>
        //             </TouchableOpacity>
        //             :
        //             <TouchableOpacity activeOpacity={0.8} onPress={handleFilterPress} style={{ backgroundColor: "#fff", height: 35, justifyContent: 'center', borderRadius: 50, width: '48%' }}>
        //                 <Text style={{ textAlign: 'center' }}>{props.text}</Text>
        //             </TouchableOpacity>
        //     }
        // </>
        <TouchableOpacity activeOpacity={0.8} onPress={handleFilterPress} style={{ backgroundColor: selectedFilters.includes(props.text) ? '#ff4c68' : '#fff', height: 35, justifyContent: 'center', borderRadius: 50, width: '48%' }}>
            <Text style={{ textAlign: 'center', color: selectedFilters.includes(props.text) ? '#fff' : '#000' }}>{props.text}</Text>
        </TouchableOpacity>

    )
}

export default FilterSectionButton