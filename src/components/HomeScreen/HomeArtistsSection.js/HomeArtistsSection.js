import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SubTitleComponent from '../SubTitleComponent'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { moderateScale } from 'react-native-size-matters'
import Dimensions from '../../../utils/Dimensions'
import { Icon } from '@rneui/themed'
import HomeArtistSectionCard from './HomeArtistSectionCard'

const HomeArtistsSection = () => {
    const navigation = useNavigation()
    const data = [
        {
            id: 1,
            name: 'Eva',
            image: require('../../../assets/images/Dj-1.jpg')
        },
        {
            id: 2,
            name: 'Eva',
            image: require('../../../assets/images/Dj-1.jpg')
        },
        {
            id: 3,
            name: 'Eva',
            image: require('../../../assets/images/Dj-1.jpg')
        },
        {
            id: 4,
            name: 'Eva',
            image: require('../../../assets/images/Dj-1.jpg')
        },
    ]
    return (
        <View>
            <SubTitleComponent text={'Artists'} />
            <View style={styles.container}>
                {
                    data.map((item, index) => {
                        return (
                            <HomeArtistSectionCard item={item} key={index} />
                        )
                    })
                }
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ArtistsScreen')} style={{ alignItems: 'center', marginBottom: 15, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Montserrat_700Bold', marginRight: 10 }}>View All</Text>
                <Icon type='antdesign' name='doubleright' color='#fff' size={moderateScale(16, Dimensions.SCALING_FACTOR)} />
            </TouchableOpacity>
        </View>
    )
}

export default HomeArtistsSection

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
})