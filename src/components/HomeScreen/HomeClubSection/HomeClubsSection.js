import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed'
import { moderateScale } from 'react-native-size-matters'
import { useState } from 'react'
import HomeClubSectionCard from './HomeClubSectionCard'
import SubTitleComponent from '../SubTitleComponent'
import Dimensions from '../../../utils/Dimensions'

const HomeClubsSection = (props) => {
    const [data, setData] = useState(props.data)
    const navigation = useNavigation()

    return (
        <View>
            <SubTitleComponent text={'Clubs, Pubs & Restobars'} />
            <View style={styles.container}>
                {
                    data.map((item, index) => {
                        return (
                            <HomeClubSectionCard item={item} key={index} />
                        )
                    })
                }
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ClubsScreen')} style={{ alignItems: 'center', marginBottom: 15, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Montserrat_700Bold', marginRight: 10 }}>View All</Text>
                <Icon type='antdesign' name='doubleright' color='#fff' size={moderateScale(16, Dimensions.SCALING_FACTOR)} />
            </TouchableOpacity>
        </View>
    )
}

export default HomeClubsSection

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        marginHorizontal: 15,
        marginTop: 15,
    }
})