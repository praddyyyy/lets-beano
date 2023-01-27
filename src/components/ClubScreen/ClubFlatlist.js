import { FlatList, StyleSheet, View, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import ClubCard from './ClubCard'
import { Divider } from 'react-native-elements';

const ClubFlatlist = (props) => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <FlatList
                contentContainerStyle={{ paddingBottom: 50 }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} progressViewOffset={40} />
                }
                data={props.data}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <>
                            <ClubCard
                                clubId={item.id}
                                image={item.image}
                                clubName={item.name}
                                clubRating={item.rating}
                                clubHighlights={item.highlights}
                                clubPhone={item.contact.phone}
                                clubEmail={item.contact.email}
                                clubFeatures={item.features}
                            />
                            {
                                index === props.data.length - 1 ? null : <Divider style={{ marginTop: 15 }} />
                            }
                        </>
                    )
                }}
            />
        </View>
    )
}

export default ClubFlatlist

const styles = StyleSheet.create({})