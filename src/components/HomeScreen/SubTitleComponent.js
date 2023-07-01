import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import Dimensions from '../../utils/Dimensions'

const SubTitleComponent = (props) => {
    const text = props.text
    return (
        <View style={styles.container}>
            <Divider style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: '50%' }} width={1.5} />
            <View style={{ alignSelf: 'flex-start', borderWidth: 1, borderColor: '#fff', borderRadius: 15, backgroundColor: '#1f1f1f', marginHorizontal: 15 }}>
                <Text style={{ color: 'white', fontFamily: 'Montserrat_700Bold', fontSize: 22, marginHorizontal: 10, textAlign: 'center' }}>{text}</Text>
            </View>
        </View>
    )
}

export default SubTitleComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})