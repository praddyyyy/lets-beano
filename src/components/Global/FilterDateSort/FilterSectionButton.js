import { Text, TouchableOpacity } from 'react-native'

const FilterSectionButton = (props) => {
    return (
        <TouchableOpacity style={{ backgroundColor: "#fff", height: 35, justifyContent: 'center', borderRadius: 50, width: '48%' }}>
            <Text style={{ textAlign: 'center' }}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default FilterSectionButton