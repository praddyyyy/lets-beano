import { Modal } from 'react-native'

// import EventFilterModalContent from '../EventsScreen/EventFilterModalContent'
import ClubFilterModalContent from '../../ClubsScreen/FilterDateSort/ClubFilterModalContent'

const FilterModalComponent = (props) => {
    return (
        <Modal
            animationType={"slide"}
            transparent={false}
            visible={props.isFilterVisible}
            onRequestClose={() => { props.setIsFilterVisible(!props.isFilterVisible) }}>
            {/* {props.type === 'clubs' ? <ClubFilterModalContent isFilterVisible={props.isFilterVisible} setIsFilterVisible={props.setIsFilterVisible} /> :
                <EventFilterModalContent isFilterVisible={props.isFilterVisible} setIsFilterVisible={props.setIsFilterVisible} />} */}
            <ClubFilterModalContent isFilterVisible={props.isFilterVisible} setIsFilterVisible={props.setIsFilterVisible} />
        </Modal>
    )
}

export default FilterModalComponent