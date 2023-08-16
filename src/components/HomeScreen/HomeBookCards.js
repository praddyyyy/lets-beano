import { StyleSheet, View } from 'react-native'
import HomeBookCard from './HomeBookCard'
import Dimensions from '../../utils/Dimensions'
import SubTitleComponent from './SubTitleComponent'

const HomeBookCards = () => {
    return (
        <View style={{ marginTop: 25, marginBottom: 20 }}>
            <SubTitleComponent text={'Book'} />
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                        <HomeBookCard goto={'EventsScreen'} text={'EVENTS'} url={require('../../assets/images/Book-Image-1.jpg')} style={{ height: '100%', width: Dimensions.SCREEN_WIDTH * 0.46 }} />
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ height: '47%' }}>
                            <HomeBookCard goto={'ClubsScreen'} text={'TABLE'} url={require('../../assets/images/Book-Image-2.jpg')} style={{ height: '100%', width: Dimensions.SCREEN_WIDTH * 0.44 }} />
                        </View>
                        <View style={{ height: '47%' }}>
                            <HomeBookCard goto={'ArtistsScreen'} text={'ARTISTS'} url={require('../../assets/images/Book-Image-3.jpg')} style={{ height: '100%', width: Dimensions.SCREEN_WIDTH * 0.44 }} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeBookCards

const styles = StyleSheet.create({
    container: {
        height: Dimensions.SCREEN_HEIGHT * 0.2,
        marginHorizontal: 15,
        flex: 1,
        marginTop: 10,
    }
})