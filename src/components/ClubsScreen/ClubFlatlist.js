import { FlatList, View, RefreshControl } from 'react-native'
import { useState, useCallback } from 'react'
import ClubCard from './ClubCard'
import { Divider } from '@rneui/themed';
import Dimensions from '../../utils/Dimensions';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const ClubFlatlist = (props) => {
    const [data, setData] = useState(props.data)
    const [refreshing, setRefreshing] = useState(false);

    const navigation = useNavigation()

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
                        <Pressable
                            // TODO Send club location to club detail screen
                            onPress={() => navigation.navigate('ClubDetailScreen', { 'clubId': item.id, 'title': item.name, 'imageSrc': item.image, 'clubHighlights': item.highlights, 'clubRating': item.rating, 'clubPhone': item.contact.phone, 'clubEmail': item.contact.email, 'clubFeatures': item.features, 'clubPriceForTwo': item.price })}
                        >
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
                            {
                                index === props.data.length - 1 ? null : <Divider style={{ marginTop: Dimensions.isLargeScreen() ? 45 : 25 }} />
                            }
                        </Pressable>
                    )
                }}
            />
        </View>
    )
}

export default ClubFlatlist