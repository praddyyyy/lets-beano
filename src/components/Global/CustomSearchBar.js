import { useState } from 'react'
import { COLORS } from '../../utils/ThemeColors'
import { SearchBar } from '@rneui/themed'
import { moderateScale } from 'react-native-size-matters'
import Dimensions from '../../utils/Dimensions'

const CustomSearchBar = (props) => {
    const [search, setSearch] = useState('')

    const searchHandler = (value) => {
        setSearch(value);
        props.handleSearch(value)
    }
    return (
        <SearchBar
            containerStyle={{
                backgroundColor: COLORS.background,
                borderBottomWidth: 0,
                borderTopWidth: 0,
                paddingHorizontal: moderateScale(10, Dimensions.SCALING_FACTOR),
                paddingVertical: 10,
            }}
            inputContainerStyle={{
                borderRadius: 15,
                height: 40,
                width: '85%',
                alignSelf: 'center',
                backgroundColor: COLORS.white,
            }}
            placeholder={props.placeholder}
            onChangeText={searchHandler}
            value={search}
            lightTheme={false}
            searchIcon={{ color: COLORS.background, size: 24 }}
        />


    )
}

export default CustomSearchBar