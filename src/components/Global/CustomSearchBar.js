import { useState } from 'react'
import { COLORS } from '../../utils/ThemeColors'
// import { SearchBar } from '@rneui/themed'
import { Searchbar } from 'react-native-paper';
import { moderateScale } from 'react-native-size-matters'
import Dimensions from '../../utils/Dimensions'

const CustomSearchBar = (props) => {
    const [search, setSearch] = useState('')

    const searchHandler = (value) => {
        setSearch(value);
        props.handleSearch(value)
    }
    return (
        // <SearchBar
        //     containerStyle={{
        //         backgroundColor: COLORS.background,
        //         borderBottomWidth: 0,
        //         borderTopWidth: 0,
        //         paddingHorizontal: moderateScale(10, Dimensions.SCALING_FACTOR),
        //         paddingVertical: 10,
        //     }}
        //     inputContainerStyle={{
        //         borderRadius: 15,
        //         height: 40,
        //         width: '90%',
        //         alignSelf: 'center',
        //         backgroundColor: COLORS.white,
        //     }}
        //     placeholder={props.placeholder}
        //     onChangeText={searchHandler}
        //     value={search}
        //     lightTheme={false}
        //     searchIcon={{ color: COLORS.background, size: 24 }}
        // />
        <Searchbar
            placeholder={props.placeholder}
            onChangeText={searchHandler}
            value={search}
            style={{ borderRadius: 50, height: 35, width: '80%', alignSelf: 'center', top: 10, backgroundColor: COLORS.white }}
            inputStyle={{ fontSize: 16, fontFamily: 'Montserrat_400Regular', alignSelf: 'center' }}
        />

    )
}

export default CustomSearchBar