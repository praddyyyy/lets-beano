import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'

const SubTitleComponent = (props) => {
    const text = props.text
    return (
        <View style={styles.container}>
            <Divider style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: '50%' }} color='#fff' width={1} />
            <View style={{ alignSelf: 'flex-start', borderWidth: 1, borderColor: '#fff', borderRadius: 15, backgroundColor: '#000', marginHorizontal: 15, padding: 3 }}>
                <Text style={{ color: 'white', fontFamily: 'Montserrat_700Bold', fontSize: 18, marginHorizontal: 10, textAlign: 'center' }}>{text}</Text>
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