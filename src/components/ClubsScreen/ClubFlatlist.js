import { FlatList, View, RefreshControl } from 'react-native'
import { useState, useCallback } from 'react'
import ClubCard from './ClubCard'

const ClubFlatlist = (props) => {
    const [data, setData] = useState(props.data)
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <FlatList
                contentContainerStyle={{ paddingBottom: 200 }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} progressViewOffset={40} />
                }
                data={data}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <ClubCard
                            clubId={item.id}
                            image={item.image}
                            clubName={item.name}
                            clubRating={item.rating}
                            clubHighlights={item.highlights}
                            clubPhone={item.contact.phone}
                            clubEmail={item.contact.email}
                            clubFeatures={item.features}
                            clubPriceForTwo={item.price}
                        />
                    )
                }}
            />
        </View>
    )
}

export default ClubFlatlist