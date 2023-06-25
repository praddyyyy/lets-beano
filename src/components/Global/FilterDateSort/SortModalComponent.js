import { Modal } from 'react-native'
import ClubSortModalContent from '../../ClubsScreen/FilterDateSort/ClubSortModalContent'


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