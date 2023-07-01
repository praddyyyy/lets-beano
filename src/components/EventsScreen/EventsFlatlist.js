import { FlatList } from 'react-native'
import EventCard from './EventCard'
import Dimensions from '../../utils/Dimensions'

const EventsFlatlist = (props) => {
    return (
        <FlatList
            data={props.data}
            keyExtractor={(item) => item.id}
            numColumns={Dimensions.isLargeScreen() ? 3 : 2}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            bounces={false}
            renderItem={({ item, index }) => {
                return (
                    <>
                        <EventCard eventName={item.name} imageUri={item.image} eventAddress={item.address} eventPrice={item.price} />
                    </>
                )
            }}
        />
    )
}

export default EventsFlatlist
