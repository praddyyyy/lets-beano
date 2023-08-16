import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import Dimensions from '../../utils/Dimensions'
import SubTitleComponent from './SubTitleComponent'

const HomeTrendingSection = (props) => {
    const [data, setData] = useState(props.data)
    return (
        <View>
            <SubTitleComponent text={'Trending'} />
            <View style={styles.container} >
                <FlatList
                    data={data}
                    horizontal
                    contentContainerStyle={{
                        // height: Dimensions.SCREEN_HEIGHT * 0.1,
                        height: '100%',
                        // paddingHorizontal: 15,
                    }}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    decelerationRate={0.8}
                    disableIntervalMomentum={true}
                    disableScrollViewPanResponder={true}
                    snapToAlignment={'center'}
                    bounces={false}
                    pagingEnabled={true}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity activeOpacity={0.5}>
                                <Image style={{ height: '100%', width: Dimensions.SCREEN_WIDTH * 0.6, borderRadius: 10, marginRight: 8 }} source={{ uri: item.image }} />
                                <View style={{ position: 'absolute', top: 0, left: 0, right: 8, bottom: 0, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                    <Text style={{ color: '#000', fontSize: 20, fontFamily: 'Montserrat_700Bold' }}>{item.offer}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.id}
                />
                <TouchableOpacity style={{ height: '70%', justifyContent: 'flex-start', marginTop: 10 }} activeOpacity={0.5}>
                    <Image style={{ height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 10, opacity: 0.6, borderWidth: 0.5, borderColor: 'rgba(255,255,255,0.3)' }} source={require('../../assets/images/Happy-Hours.jpg')} />
                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Montserrat_700Bold' }}>HAPPY HOURS</Text>
                        <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Montserrat_400Regular', width: '80%', textAlign: 'center' }}>Get exciting offers on cocktails, beers, spirits and more...</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default HomeTrendingSection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.SCREEN_HEIGHT * 0.25,
        marginHorizontal: 15,
        marginTop: 10,
    }
})