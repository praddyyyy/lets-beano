import { StyleSheet, TouchableOpacity, LayoutAnimation, View } from 'react-native'
import React, { useState } from 'react'
import { SearchBar } from 'react-native-elements'
import Icon, { Icons } from './global/Icons'

// if (Platform.OS === 'android') {
//     UIManager.setLayoutAnimationEnabledExperimental &&
//         UIManager.setLayoutAnimationEnabledExperimental(true);
// }

const SearchBarComponent = (props) => {

    const [search, setSearch] = useState('')
    const [searchBarExpanded, setSearchBarExpanded] = useState(false)

    const searchHandler = (value) => {
        setSearch(value);
        props.handleSearch(value)
    }
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15 }}>
            <TouchableOpacity onPress={() => {
                LayoutAnimation.configureNext({
                    duration: 250,
                    update: {
                        type: LayoutAnimation.Types.spring,
                        springDamping: 0.7,
                    },
                });
                setSearchBarExpanded(!searchBarExpanded)
            }}>
                <Icon type={Icons.FontAwesome5} name='search' size={30} color='#fff' />

            </TouchableOpacity>
            <View style={{ width: '100%', height: 50, justifyContent: 'center' }}>
                <SearchBar
                    containerStyle={{
                        backgroundColor: '#1f1f1f',
                        borderBottomColor: 'transparent',
                        borderTopColor: 'transparent',
                        width: searchBarExpanded ? '90%' : 0,
                        borderRadius: 50
                        // overflow: 'hidden',
                    }}
                    inputContainerStyle={{
                        backgroundColor: '#fff',
                        borderRadius: 15,
                        borderRadius: 50,
                        width: searchBarExpanded ? '90%' : 0,
                        // overflow: 'hidden',
                    }}
                    placeholder={props.placeholder}
                    onChangeText={searchHandler}
                    value={search}
                    showCancel
                    onKeyboardHide={() => {
                        console.log("hide")
                    }}
                    onCancel={() => {
                        console.log("cancel")
                    }}
                    onClear={() => {
                        console.log("clear")
                    }}
                    onEndEditing={() => {
                        setSearchBarExpanded(!searchBarExpanded)
                    }}
                    onBlur={() => {
                        console.log("blur")
                    }}
                />
            </View>
        </View>
    )
}

export default SearchBarComponent

const styles = StyleSheet.create({})