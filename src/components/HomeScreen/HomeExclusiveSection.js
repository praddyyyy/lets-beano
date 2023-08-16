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
                                <TouchableOpacity style={{
                                    width: 120,
                                    marginRight: 10
                                }}
                                    activeOpacity={0.5}
                                >
                                    <Image style={{ height: '100%', width: '100%', borderRadius: 10, opacity: 0.7, borderWidth: 0.5, borderColor: 'rgba(255,255,255,0.3)' }} source={{ uri: item.image }} />
                                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginHorizontal: 5 }}>
                                        <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Montserrat_700Bold', width: '100%', textAlign: 'center' }}>{item.title}</Text>
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
        height: Dimensions.SCREEN_HEIGHT * 0.18,
        marginHorizontal: 15,
        marginBottom: 15,
        marginTop: 10,
    }
})