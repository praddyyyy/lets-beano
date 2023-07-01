import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native'
import { useState } from 'react'
import SubTitleComponent from './SubTitleComponent'
import Dimensions from '../../utils/Dimensions'

const HomeExclusiveSection = (props) => {
    const [data, setData] = useState(props.data)
    return (
        <View>
            <SubTitleComponent text={'Exclusive'} />
            <View style={styles.container}>
                <View>
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
                                <TouchableOpacity activeOpacity={0.5}>
                                    < Image style={{ height: Dimensions.SCREEN_HEIGHT * 0.22, width: Dimensions.SCREEN_WIDTH * 0.35, borderRadius: 10, marginHorizontal: 10, opacity: 0.6, borderWidth: 0.5, borderColor: 'rgba(255,255,255,0.3)' }} source={item.image} />
                                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginHorizontal: 15 }}>
                                        <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Montserrat_700Bold', width: '90%', textAlign: 'center' }}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </View >
    )
}

export default HomeExclusiveSection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.SCREEN_HEIGHT * 0.25,
        marginHorizontal: 15,
        marginTop: 15
    }
})