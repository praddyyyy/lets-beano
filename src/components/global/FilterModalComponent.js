import { StyleSheet, Modal } from 'react-native'
import React from 'react'
import ClubFilterModalContent from '../ClubScreen/ClubFilterModalContent'
import EventFilterModalContent from '../EventsScreen/EventFilterModalContent'

const FilterModalComponent = (props) => {
    return (
        <Modal
            animationType={"slide"}
            transparent={false}
            visible={props.isFilterVisible}
            onRequestClose={() => { props.setIsFilterVisible(!props.isFilterVisible) }}>
            {props.type === 'clubs' ? <ClubFilterModalContent isFilterVisible={props.isFilterVisible} setIsFilterVisible={props.setIsFilterVisible} /> :
                <EventFilterModalContent isFilterVisible={props.isFilterVisible} setIsFilterVisible={props.setIsFilterVisible} />}
        </Modal>
    )
}

export default FilterModalComponent

const styles = StyleSheet.create({

})