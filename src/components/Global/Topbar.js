import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import Dimensions from '../../utils/Dimensions'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed'
import { moderateScale } from 'react-native-size-matters'

const TopBar = (props) => {
    const { type, length } = props
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }}>
                        <Icon type='ionicon' name='chevron-back-circle' color='white' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                    </TouchableOpacity>
                </View>
                <Pressable onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={{ color: '#FF4C68', fontFamily: 'Montserrat_700Bold', fontSize: moderateScale(20, Dimensions.SCALING_FACTOR) }}>Let's Beano</Text>
                </Pressable>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                        <Icon type='ionicon' name='search-outline' color='white' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginTop: 15,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                }}>
                    <Icon type='ionicon' name='ios-location' color='white' size={moderateScale(20, Dimensions.SCALING_FACTOR)} />

                    <Text style={{ color: 'white', fontFamily: 'Montserrat_700Bold', fontSize: moderateScale(13, Dimensions.SCALING_FACTOR) }}>Kalavakkam, Chennai</Text>
                </View>
                <View>
                    {
                        type == 'clubs' ?
                            <Text style={{ color: 'white', fontFamily: 'Montserrat_700Bold', fontSize: moderateScale(13, Dimensions.SCALING_FACTOR) }}>{length} Clubs Listed</Text>
                            :
                            <Text style={{ color: 'white', fontFamily: 'Montserrat_700Bold', fontSize: moderateScale(13, Dimensions.SCALING_FACTOR) }}>{length} Events Listed</Text>
                    }
                </View>
            </View>

        </View >
    )
}

export default TopBar

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: moderateScale(10, Dimensions.SCALING_FACTOR),
        paddingTop: 15
    }
})