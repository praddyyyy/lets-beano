import { FlatList, View, RefreshControl } from 'react-native'
import { useState, useCallback } from 'react'
import ArtistCard from './ArtistCard';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const ArtistFlatlist = (props) => {
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
                numColumns={2}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable
                            // TODO Send club location to club detail screen
                            onPress={() => navigation.navigate('ArtistDetailScreen', { artistId: item.id, artistName: item.name, artistImage: item.image, artistLanguages: item.languages, artistAbout: item.about, artistGenres: item.genres, artistExperience: item.experience })}
                        >
                            <ArtistCard
                                artistId={item.id}
                                artistName={item.name}
                                artistImage={item.image}
                                artistLanguages={item.languages}
                                artistAbout={item.about}
                                artistGenres={item.genres}
                                artistExperience={item.experience}
                            />
                        </Pressable>
                    )
                }}
            />
        </View>
    )
}

export default ArtistFlatlist