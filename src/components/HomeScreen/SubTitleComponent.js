import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import Dimensions from '../../constants/Dimensions'

const SubTitleComponent = (props) => {
    const text = props.text
    return (
        <View style={styles.container}>
            <Divider style={{ position: 'absolute', top: 10, left: 0, right: 0, bottom: 15 }} width={1.5} />
            <View style={{ flex: 1, marginHorizontal: 120, borderWidth: 1, borderColor: '#fff', borderRadius: 15, backgroundColor: '#1f1f1f' }}>
                <Text style={{ color: 'white', fontFamily: 'Montserrat-Bold', fontSize: 20, width: '100%', textAlign: 'center' }}>{text}</Text>
            </View>
        </View>
    )
}

export default SubTitleComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.SCREEN_WIDTH,
    }
})