import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Skeleton from '../components/global/Skeleton'
import Dimensions from '../constants/Dimensions'

const DJScreen = () => {
    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: '#000' }}>
            <Skeleton width={Dimensions.SCREEN_WIDTH - 30} height={170} style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
            <View style={{ width: Dimensions.SCREEN_WIDTH - 30, height: 40, backgroundColor: 'rgba(255,255,255,0.12)', justifyContent: 'center', paddingLeft: 10 }}>
                <Skeleton width={100} height={15} style={{ borderRadius: 5 }} />
            </View>
            <View style={{ width: Dimensions.SCREEN_WIDTH - 30, height: 100, backgroundColor: 'rgba(255,255,255,0.12)', paddingLeft: 10, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <Skeleton width={20} height={20} style={{ borderRadius: 50, marginRight: 10 }} />
                            <Skeleton width={100} height={15} style={{ borderRadius: 5 }} />
                            <Skeleton width={50} height={15} style={{ borderRadius: 5, marginLeft: 20 }} />
                        </View>
                        <Skeleton width={200} height={15} style={{ borderRadius: 5, marginBottom: 10 }} />
                    </View>
                    <View>
                        <Skeleton width={50} height={50} style={{ borderRadius: 15, marginRight: 10 }} />
                    </View>
                </View>
                <Skeleton width={250} height={15} style={{ borderRadius: 5 }} />
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Skeleton width={200} height={40} style={{ borderRadius: 50, backgroundColor: 'rgba(255,255,255,0.1)' }} />
                </View>
            </View>
        </View>
    )
}

export default DJScreen

const styles = StyleSheet.create({})