import { Image, ScrollView, Text, View } from 'react-native'
import { Icon } from '@rneui/themed'
import BookNowButton from './BookNowButton'
import { moderateScale } from 'react-native-size-matters'
import Dimensions from '../../utils/Dimensions'

const ArtistTab = () => {
    return (
        <View style={{ marginHorizontal: 15, flex: 1 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 200 }}
            >
                <View style={{ borderWidth: 1, borderColor: '#fff', borderRadius: 15, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 15 }}>
                            <Image style={{ height: 100, width: '100%', borderRadius: 15 }} source={require('../../assets/images/Dj-1.jpg')} />
                        </View>
                        <View style={{ flex: 2, alignItems: 'flex-start', padding: 10, justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: '#fff', fontFamily: 'Montserrat_600SemiBold', fontSize: 20, marginBottom: 5 }}>DJ 1</Text>
                                <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 15, width: '65%', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                        {/* <Icon type={Icons.AntDesign} name='star' color='gold' size={15} /> */}
                                        <Icon type='antdesign' name='star' color='gold' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                                        <Text style={{ color: '#000', fontFamily: 'Montserrat_700Bold' }}>4.2</Text>
                                    </View>
                                    <Text style={{ color: '#000', fontFamily: 'Montserrat_400Regular', fontSize: 12 }}>1007 Reviews</Text>
                                </View>
                            </View>
                            <Text style={{ color: '#fff', fontFamily: 'Montserrat_600SemiBold' }}>Tamil, Telugu, English, Hindi</Text>
                        </View>
                    </View>
                    <View style={{ padding: 5 }}>
                        <Text style={{ color: '#fff', fontFamily: 'Montserrat_400Regular', fontSize: 14, marginHorizontal: 10, marginVertical: 5 }}>Disc jockeys, also known as DJs, play musical recordings on radio shows, at nightclubs, and at public events. DJs mostly work for radio stations presenting programs, talks shows, and chart shows. They ensure musical recordings and advertisements are played on time and also interact with listeners through social media.</Text>
                    </View>
                </View>
            </ScrollView>
            <BookNowButton />
        </View>
    )
}

export default ArtistTab