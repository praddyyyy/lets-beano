import { StyleSheet, Text, View } from 'react-native'
import Dimensions from '../../utils/Dimensions'
import { useState } from 'react'
import HomePopularLocationCard from './HomePopularLocationCard'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'

const HomePopularLocations = (props) => {
    const [data, setData] = useState(props.data)
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ color: 'white', fontFamily: 'Montserrat_700Bold', fontSize: 18, margin: 10 }}>Popular Locations</Text>
            </View>
            {/* <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'flex-start' }}>
                {data.map((item, index) =>
                    <HomePopularLocationCard key={index} url={item.image} />
                )}
            </View> */}
            <FlatList
                data={data}
                horizontal
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
                        <TouchableOpacity>
                            {/* <Image style={{ height: Dimensions.SCREEN_HEIGHT * 0.1, width: Dimensions.SCREEN_WIDTH * 0.6, borderRadius: 10, marginRight: 10 }} source={item.image} /> */}
                            <HomePopularLocationCard url={item.image} />
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default HomePopularLocations

const styles = StyleSheet.create({
    container: {
        height: Dimensions.SCREEN_HEIGHT * 0.15,
        marginHorizontal: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        paddingLeft: 5,
        paddingRight: 10,
    }
})