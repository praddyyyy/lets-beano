import { StyleSheet, Text, View } from 'react-native'
import SubTitleComponent from './SubTitleComponent'
import { useState } from 'react'
import { FlatList } from 'react-native'
import Dimensions from '../../utils/Dimensions'
import HomeEventSectionCard from './HomeEventSectionCard'
import { Icon } from '@rneui/themed'
import { moderateScale } from 'react-native-size-matters'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const HomeEventSection = (props) => {
    const [data, setData] = useState(props.data)
    const navigation = useNavigation()

    return (
        <View>
            <SubTitleComponent text={'Events'} />
            <View style={styles.container}>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={32}
                    decelerationRate={0.8}
                    disableIntervalMomentum={true}
                    disableScrollViewPanResponder={true}
                    snapToAlignment={'start'}
                    bounces={false}
                    pagingEnabled={true}
                    renderItem={({ item, index }) => {
                        return (
                            <HomeEventSectionCard item={item} />
                        )
                    }}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('EventsScreen')} style={{ alignItems: 'center', marginVertical: 15, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Montserrat_700Bold', marginRight: 10 }}>View All</Text>
                <Icon type='antdesign' name='doubleright' color='#fff' size={moderateScale(16, Dimensions.SCALING_FACTOR)} />
            </TouchableOpacity>
        </View>
    )
}

export default HomeEventSection

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        height: Dimensions.SCREEN_HEIGHT * 0.33,
        marginHorizontal: 15,
        marginTop: 15,
    }
})