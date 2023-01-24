import { StyleSheet, Modal } from 'react-native'
import React from 'react'
import ClubSortModalContent from './ClubScreen/ClubSortModalContent'

const SortModalComponent = (props) => {
    return (
        <Modal
            animationType={"slide"}
            transparent={false}
            visible={props.isSortVisible}
            onRequestClose={() => { props.setIsSortVisible(!props.isSortVisible) }}>
            <ClubSortModalContent isSortVisible={props.isSortVisible} setIsSortVisible={props.setIsSortVisible} />
        </Modal>
    )
}

export default SortModalComponent

const styles = StyleSheet.create({

})