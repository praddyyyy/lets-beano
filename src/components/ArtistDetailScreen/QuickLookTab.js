import { Text, View, Image, ScrollView } from 'react-native'
import { COLORS } from '../../utils/ThemeColors';

import { useSelector } from 'react-redux';
import React from 'react';

const QuickLookTab = (props) => {
    const { artistsData } = useSelector(state => state.artistsData)

    const artistId = props.artistId;
    const artistName = props.artistName;
    const artistImage = props.artistImage;
    const artistLanguages = props.artistLanguages;
    const artistAbout = props.artistAbout;
    const artistExperience = props.artistExperience;
    const artistGenres = props.artistGenres;

    const filteredArtists = artistsData.filter(item => item.id !== artistId);

    // Function to capitalize the first letter of a string
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // Create an array to hold JSX elements
    const genreElements = artistGenres.map((genre, index) => (
        <React.Fragment key={index}>
            {index > 0 && ', '}
            <Text style={{ fontSize: 16, fontFamily: 'Blinker_400Regular', color: 'white' }}>{capitalizeFirstLetter(genre)}</Text>
        </React.Fragment>
    ));

    // Concatenate the array of elements into a single string
    const concatenatedElements = genreElements.reduce((prev, curr) => [prev, curr]);

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, backgroundColor: '#000', marginHorizontal: 15, marginVertical: 20 }}>
                    {/* Details Container */}
                    <View style={{ flex: 1, borderRadius: 15, borderWidth: 1, borderColor: '#fff', marginBottom: 15 }}>
                        <Text style={{ color: '#fff', fontFamily: 'Blinker_700Bold', fontSize: 20, marginHorizontal: 15, marginTop: 15 }}>DJ {artistName}</Text>
                        <Text style={{ color: '#fff', fontFamily: 'Blinker_400Regular', fontSize: 16, marginHorizontal: 15, marginVertical: 10 }}>{artistAbout}</Text>
                    </View>
                    <View style={{ flex: 1, borderRadius: 15, borderWidth: 1, borderColor: '#fff', marginBottom: 15 }}>
                        <Text style={{ color: '#fff', fontFamily: 'Blinker_700Bold', fontSize: 20, marginHorizontal: 15, marginTop: 15 }}>Experience</Text>
                        <Text style={{ color: COLORS.primary, fontFamily: 'Blinker_600SemiBold', fontSize: 18, marginHorizontal: 15, marginVertical: 10 }}>{artistExperience} +</Text>
                    </View>
                    <View style={{ flex: 1, borderRadius: 15, borderWidth: 1, borderColor: '#fff', marginBottom: 15 }}>
                        <Text style={{ color: '#fff', fontFamily: 'Blinker_700Bold', fontSize: 20, marginHorizontal: 15, marginTop: 15 }}>Music Genres</Text>
                        <Text style={{ color: COLORS.white, fontFamily: 'Blinker_400Regular', fontSize: 16, marginHorizontal: 15, marginVertical: 10 }}>{concatenatedElements}</Text>
                    </View>

                    <Text style={{ fontFamily: 'Montserrat_700Bold', color: '#fff', fontSize: 16, marginHorizontal: 10, marginVertical: 10 }}>Other Popular Artists</Text>
                    <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                filteredArtists.map((item, index) => {
                                    return (
                                        <View key={index} style={{ marginHorizontal: 5, backgroundColor: '#242424', borderRadius: 15 }}>
                                            <Image source={{ uri: item.image }} style={{ height: 100, width: 100, borderRadius: 10 }} />
                                            <Text style={{ color: '#fff', fontFamily: 'Blinker_400Regular', fontSize: 16, textAlign: 'center', marginVertical: 5 }}>{item.name}</Text>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>

                </View>
            </ScrollView >
        </View >
    )
}

export default QuickLookTab