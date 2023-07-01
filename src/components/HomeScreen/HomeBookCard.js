import { TouchableOpacity, Image, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeBookCard = (props) => {
    const text = props.text
    const goto = props.goto
    // console.log(typeof goto)
    const navigation = useNavigation()
    return (
        // TODO Check DJ's text
        <TouchableOpacity style={{ borderRadius: 10 }} activeOpacity={0.5} onPress={() => navigation.navigate(goto)}>
            <Image style={[{ borderRadius: 10, opacity: 0.6, borderWidth: 0.5, borderColor: 'rgba(255,255,255,0.3)' }, props.style]} source={props.url} />
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Montserrat_700Bold' }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeBookCard
