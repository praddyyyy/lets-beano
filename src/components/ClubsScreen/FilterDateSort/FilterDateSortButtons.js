import { Text, View, TouchableOpacity } from 'react-native'
import { Icon } from '@rneui/themed'
import { moderateScale } from 'react-native-size-matters'
import Dimensions from '../../../utils/Dimensions'

const FilterDateSortButtons = (props) => {
    return (
        <TouchableOpacity onPress={props.pressHandler}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: moderateScale(16, Dimensions.SCALING_FACTOR), fontFamily: 'Blinker_600SemiBold', color: 'white', marginRight: 10 }}>{props.text}</Text>
                <Icon type={props.iconType} name={props.icon} color='white' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
            </View>
        </TouchableOpacity>
    )
}

export default FilterDateSortButtons